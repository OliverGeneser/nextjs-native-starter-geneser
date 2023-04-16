// @ts-nocheck

/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { AppProps } from 'next/app'
import '../../styles/globals.css'
import SuperTokens from 'supertokens-web-js'
import { getFrontendConfig } from 'next-web/config/frontendConfig'
import { Bebas_Neue, Work_Sans } from '@next/font/google'

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas-neue',
  weight: ['400'],
})

if (typeof window !== 'undefined') {
  SuperTokens.init({
    ...getFrontendConfig(),
    // enableDebugLogs: !IS_IN_PRODUCTION_ENVIRONMENT,
  })
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <>
    <main className={`${bebasNeue.variable} font-display`}>
      <div className={`${workSans.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </main>
  </>
)

export default MyApp
