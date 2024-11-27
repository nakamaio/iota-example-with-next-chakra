import { ChakraProvider, createLocalStorageManager } from '@chakra-ui/react'
import { createNetworkConfig, IotaClientProvider, WalletProvider } from '@iota/dapp-kit'
import { getFullnodeUrl } from '@iota/iota-sdk/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from '~/components/layout'
import { COLOR_MODE_LOCAL_STORAGE_KEY } from '~/constants'
import { useTranslation } from '~/lib/i18n'
import { theme } from '~/styles/theme'

import '@fontsource-variable/inter'

const WEB_URL = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
const FEATURED_IMAGE_PATH = '/featured-image.jpg' // TODO: Add featured image

const colorModeManager = createLocalStorageManager(COLOR_MODE_LOCAL_STORAGE_KEY)

const queryClient = new QueryClient()
// Config options for the networks you want to connect to
const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl('localnet') },
  testnet: { url: getFullnodeUrl('testnet') },
})
import '@iota/dapp-kit/dist/index.css'

function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation('layout')

  const imageURL = new URL(FEATURED_IMAGE_PATH, WEB_URL).href

  return (
    <ChakraProvider colorModeManager={colorModeManager} resetCSS theme={theme}>
      <QueryClientProvider client={queryClient}>
        <IotaClientProvider networks={networkConfig} defaultNetwork="localnet">
          <WalletProvider>
            <Head>
              <title>{t('meta.title')}</title>
              <meta name="description" content={t('meta.description')} />

              <meta property="og:image" content={imageURL} key="ogImage" />
              <meta property="twitter:image" content={imageURL} key="twitterCardImage" />

              <meta property="og:type" content="website" key="ogType" />
              <meta property="og:title" content={t('meta.title')} key="ogTitle" />
              <meta property="og:description" content={t('meta.description')} key="ogDescription" />

              <meta property="twitter:card" content="summary_large_image" key="twitterCardSummary" />
              <meta property="twitter:title" content={t('meta.title')} key="twitterCardTitle" />
              <meta property="twitter:description" content={t('meta.description')} key="twitterCardDescription" />
            </Head>

            <Layout>
              <Component {...pageProps} />
            </Layout>
          </WalletProvider>
        </IotaClientProvider>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

export default App
