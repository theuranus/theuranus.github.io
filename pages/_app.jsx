import Head from 'next/head'
import { MainLayout } from '../components/layouts/MainLayout'
import '../styles/index.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Head>
        <title>James Ng</title>
      </Head>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
