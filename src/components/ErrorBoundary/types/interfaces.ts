import { ReactNode } from 'react';

export interface Props {
  children: ReactNode;
}

export interface State {
  error: Error | null;
  hasError: boolean;
}
