import React from 'react'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  className?: string
}

export function Loading({ size = 'md', text, className = '' }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <div className={`animate-spin rounded-full border-2 border-sky-200 border-t-sky-600 ${sizeClasses[size]}`} />
      {text && (
        <p className="text-sm text-gray-600 animate-pulse">{text}</p>
      )}
    </div>
  )
}

export function PageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="text-center">
        <div className="w-16 h-16 animate-spin rounded-full border-4 border-sky-200 border-t-sky-600 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Loading MOLIFE</h2>
        <p className="text-gray-600">Please wait while we prepare your healthcare experience...</p>
      </div>
    </div>
  )
}

export function ButtonLoading({ children, isLoading, ...props }: any) {
  return (
    <button {...props} disabled={isLoading || props.disabled}>
      {isLoading ? (
        <div className="flex items-center justify-center gap-2">
          <div className="w-4 h-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
          <span>Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  )
}