import { RenderOptions, render, renderHook } from '@testing-library/react';
import { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { PropsWithChildren } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import {
  AppStore, RootState, persistor, tsStore,
} from '@Store/index';
import Theme from '@Theme';
import ErrorBoundary from '@Components/ErrorBoundary';

const defaultState: RootState = {
  weatherReducer: {
    error: '',
    isLoading: false,
    clickedDay: null,
    weatherImage: {
      current: '',
      days: [],
    },
    weather: {
      location: {
        name: 'Minsk',
      },
      current: {
        temp_c: 36.8,
        condition: {
          icon: './sun.jpg',
          text: 'sunny',
        },
      },
      forecast: {
        forecastday: [
          {
            date: new Date('05-10-2023'),
            day: {
              avgtemp_c: 34.7,
              condition: {
                icon: './rain.jpeg',
                text: 'rainy',
              },
            },
            hour: [
              {
                time: '23:13:10',
                temp_c: 12.5,
                condition: {
                  icon: './coldy.png',
                  text: 'very cold',
                },
              },
            ],
          },
        ],
      },
    },
  },
  _persist: {
    rehydrated: false,
    version: 1,
  },
};

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}
export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = defaultState,
    store = tsStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren) {
    return (
      <Theme>
        <Provider store={store}>
          <PersistGate
            loading={<h1>Loading persist..</h1>}
            persistor={persistor}
          >
            <ErrorBoundary>{children}</ErrorBoundary>
          </PersistGate>
        </Provider>
      </Theme>
    );
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export function renderHookWithProviders<Result, Props = undefined>(
  callback: (initialProps: Props) => Result,
  {
    preloadedState = defaultState,
    store = tsStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  function Wrapper({ children }: PropsWithChildren) {
    return (
      <Provider store={store}>
        <PersistGate loading={<h1>Loading persist..</h1>} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    );
  }

  return {
    store,
    ...renderHook<Result, Props>(callback, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
  };
}
