'use client'

import React from 'react'

interface SectionErrorBoundaryProps {
  children: React.ReactNode
  sectionName: string
}

interface SectionErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export class SectionErrorBoundary extends React.Component<SectionErrorBoundaryProps, SectionErrorBoundaryState> {
  constructor(props: SectionErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): SectionErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(`SectionErrorBoundary [${this.props.sectionName}] caught an error:`, error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-mebee-sage p-8">
          <div className="max-w-md w-full text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-mebee-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-lg">⚠️</span>
            </div>
            <h3 className="text-lg font-bold text-mebee-dark-navy mb-2 font-articulat">
              Section Unavailable
            </h3>
            <p className="text-mebee-navy/80 mb-4 text-sm">
              The {this.props.sectionName} section encountered an error.
            </p>
            <button
              onClick={this.resetError}
              className="w-full bg-mebee-yellow text-mebee-dark-navy hover:bg-mebee-yellow/90 font-semibold px-4 py-2 text-sm transition-all duration-200 min-h-[44px]"
            >
              Retry Section
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="text-xs text-mebee-navy/60 cursor-pointer">
                  Error Details
                </summary>
                <pre className="text-xs bg-mebee-dark-navy/10 p-2 rounded mt-2 overflow-auto">
                  {this.state.error.message}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}