// import '@styles/globals.scss'
import { Head, Layout, ManageLayout } from '@components/common'
import '@styles/styles.scss'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
    <Head />
      <ManageLayout >
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </ManageLayout>

    </>

  )
}
