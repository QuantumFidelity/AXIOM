// src/app/auth/error/page.tsx
'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function AuthError() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const error = searchParams.get('error')

  useEffect(() => {
    console.error('Auth error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-6">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Authentication Error
          </h2>
          <div className="mt-4 text-center text-red-600">
            {error || 'An error occurred during authentication'}
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={() => router.push('/auth/signin')}
            className="text-indigo-600 hover:text-indigo-500"
          >
            Return to sign in
          </button>
        </div>
      </div>
    </div>
  )
}