import React, { Component, ReactNode } from 'react';

import { ErrorBlock } from './styles';
import { Props, State } from './types/interfaces';

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props | Readonly<Props>) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  componentDidCatch(error: Error) {
    this.setState({
      hasError: true,
      error,
    });
  }

  render(): ReactNode {
    const { hasError, error } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <>
          <ErrorBlock>There is an error!</ErrorBlock>
          {error?.message && <ErrorBlock>{error.message}</ErrorBlock>}
          <ErrorBlock>Try to clear your local storage !</ErrorBlock>
        </>
      );
    }

    return children;
  }
}
