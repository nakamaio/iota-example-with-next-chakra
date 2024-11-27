import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = 'https://8db7758e8bc6bd101de7e8fe4f117d77@o4504735362973696.ingest.us.sentry.io/4507510081650688'

export const getServerEnvironment = () => {
  const vercelUrl = process.env.VERCEL_URL
  if (vercelUrl && vercelUrl.includes('realize-frontend-')) {
    return 'staging'
  }

  return process.env.VERCEL_ENV
}

export const getClientEnvironment = () => {
  const vercelUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  if (vercelUrl && vercelUrl.includes('realize-frontend-')) {
    return 'staging'
  }

  return process.env.NEXT_PUBLIC_VERCEL_ENV
}

export function getSentryConfig() {
  return {
    dsn: SENTRY_DSN,
    // Adjust this value in production, or use tracesSampler for greater control
    tracesSampleRate: 1,
    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
    enabled: process.env.NODE_ENV === 'production',
  }
}

export const trackException = (e: Error | unknown) => {
  if (!(e instanceof Error)) {
    return
  }

  Sentry.captureException(e)
}
