// ONLY MODIFIED FILE

import '../styles/globals.css'

// Added import
import { ConfigCatProvider } from 'configcat-react'

function MyApp({ Component, pageProps }) {
  return (
    // API key from a project I'm working on
    <ConfigCatProvider sdkKey="LanaCJS5rE-C48LHw_rIuw/3qTi_AoHSkKmHDd5qhSMdQ">
      <Component {...pageProps} />
    </ConfigCatProvider>
  )
}

export default MyApp
