import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("Uncaught render error:", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-4 text-center">
          <h1 className="text-2xl font-bold text-white">
            Something went wrong
          </h1>
          <p className="mt-3 max-w-md text-slate-400">
            An unexpected error occurred. Please refresh the page.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-surface transition hover:bg-cyan-300"
          >
            Refresh page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
