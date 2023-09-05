import { RenderOptions, render, renderHook } from '@testing-library/react';
import { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { PropsWithChildren } from 'react';
import { AppStore, RootState, setupStore } from '@store/index';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}
export function renderWithProviders(
  ui: React.ReactElement,
  { store = setupStore(), ...renderOptions }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren) {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export function renderHookWithProviders<Result, Props = undefined>(
  callback: (initialProps: Props) => Result,
  { store = setupStore(), ...renderOptions }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren) {
    return <Provider store={store}>{children}</Provider>;
  }

  return {
    store,
    ...renderHook<Result, Props>(callback, {
      wrapper: Wrapper,
      ...renderOptions,
    }),
  };
}
