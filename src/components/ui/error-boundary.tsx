'use client'

import React from 'react'

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback
      return <FallbackComponent error={this.state.error} resetError={this.resetError} />
    }

    return this.props.children
  }
}

function DefaultErrorFallback({ error, resetError }: { error?: Error; resetError: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-mebee-sage p-8">
      <div className="max-w-md w-full text-center bg-white p-8 rounded-lg shadow-lg">
        <div className="w-16 h-16 bg-mebee-yellow rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">⚠️</span>
        </div>
        <h2 className="text-2xl font-bold text-mebee-dark-navy mb-4 font-articulat">
          Something went wrong
        </h2>
        <p className="text-mebee-navy/80 mb-6 leading-relaxed">
          We encountered an unexpected error. Please try refreshing the page or contact support if the problem persists.
        </p>
        <div className="space-y-3">
          <button
            onClick={resetError}
            className="w-full bg-mebee-yellow text-mebee-dark-navy hover:bg-mebee-yellow/90 font-semibold px-6 py-3 transition-all duration-200 min-h-[44px]"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-transparent border-2 border-mebee-dark-navy text-mebee-dark-navy hover:bg-mebee-dark-navy hover:text-white font-semibold px-6 py-3 transition-all duration-200 min-h-[44px]"
          >
            Refresh Page
          </button>
        </div>
        {process.env.NODE_ENV === 'development' && error && (
          <details className="mt-6 text-left">
            <summary className="text-sm text-mebee-navy/60 cursor-pointer mb-2">
              Error Details (Development)
            </summary>
            <pre className="text-xs bg-mebee-dark-navy/10 p-3 rounded overflow-auto text-mebee-dark-navy">
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}
      </div>
    </div>
  )
}