import { cn } from 'lib/utils/util'
import { Work_Sans } from 'next/font/google'
import '../../styles/globals.css'
import { Metadata } from 'next'
import { headers } from 'next/headers'
import { SuperTokensProvider } from './ui/supertokensProvider'


import { TRPCReactProvider } from './providers'

const fontSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: '400',
})

/**
 * Since we're passing `headers()` to the `TRPCReactProvider` we need to
 * make the entire app dynamic. You can move the `TRPCReactProvider` further
 * down the tree (e.g. /dashboard and onwards) to make part of the app statically rendered.
 */
export const dynamic = 'force-dynamic'

export async function generateMetadata() {
  const metadata: Metadata = {
    title: {
      default: `Welcome to Next.js Native | Next.js Native`,
      template: `%s | Next.js Native`,
    },
  }

  return metadata
}

export default async function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SuperTokensProvider>
        <body className={cn('min-h-screen antialiased', fontSans.className)}>
          <TRPCReactProvider headers={headers()}>
            <main>{children}</main>
          </TRPCReactProvider>
        </body>
      </SuperTokensProvider>
    </html>
  )
}
