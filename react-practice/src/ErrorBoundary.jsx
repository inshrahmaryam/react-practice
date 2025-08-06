import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Caught error in ErrorBoundary:", error, errorInfo);
  }

  render() {
    return this.state.hasError
      ? <h3>Something went really wrong!!</h3>
      : this.props.children;
  }
}

export default ErrorBoundary;
