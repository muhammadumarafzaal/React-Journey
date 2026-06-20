import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      showDetails: false 
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ errorInfo });
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  toggleDetails = () => {
    this.setState(prevState => ({ showDetails: !prevState.showDetails }));
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="error-fallback">
          <div className="error-fallback-header">
            <span className="error-badge">SYSTEM CRASH</span>
            <h3 className="error-message">
              {this.state.error && this.state.error.toString()}
            </h3>
          </div>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            A fatal exception occurred in the component hierarchy. The execution thread was halted to protect the parent state integrity.
          </p>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-danger" onClick={this.handleReset}>
              🔄 Reset Component
            </button>
            <button className="btn btn-secondary" onClick={this.toggleDetails}>
              {this.state.showDetails ? 'Hide Diagnostics' : 'Show Diagnostics'}
            </button>
          </div>

          {this.state.showDetails && this.state.errorInfo && (
            <div className="stack-trace-container">
              <h5 style={{ fontWeight: 600, color: 'var(--accent-red)' }}>Component Stack Trace</h5>
              <pre className="stack-trace">
                {this.state.errorInfo.componentStack}
              </pre>
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
