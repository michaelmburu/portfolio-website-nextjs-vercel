import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/MDX'
import '@/styles/globals.css'

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <MDXProvider components={MDXComponents}>
        {getLayout(<Component {...pageProps} />)}
      </MDXProvider>
      <meta name="google-site-verification" content="xOxDON0o9yfmcqSLaMqQluMdJNAR_Zb8v6aZ26aCYCc" />
    </>
  )
}

export default MyApp
