import '../styles/globals.scss'
import 'bulma/css/bulma.css'
import Layout from '../components/layout'
import { Provider, useSession, signOut } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
