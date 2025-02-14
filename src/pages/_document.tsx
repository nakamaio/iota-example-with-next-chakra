import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

import { COLOR_MODE_LOCAL_STORAGE_KEY } from '~/constants'

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/public/favicon.ico" />
        </Head>

        <body>
          <ColorModeScript storageKey={COLOR_MODE_LOCAL_STORAGE_KEY} initialColorMode="light" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
