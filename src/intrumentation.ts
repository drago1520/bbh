import * as Sentry from '@sentry/nextjs'

export async function register() {
  await import('../sentry.server.config')
}
// Capture errors from nested React Server Components
export const onRequestError = Sentry.captureRequestError
