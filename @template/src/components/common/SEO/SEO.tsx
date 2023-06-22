import Head from "next/head"
import config from "@config/seo_meta.json"

type props = {
  children: JSX.Element;
}


const SEO = ({children}:props) => {

  return (
    <Head>
      <title key='title'>
        {config.title}
      </title>
      <meta
        key='description'
        name='description'
        content={config.description}
      />
      <meta
        key='og:type'
        property='og:type'
        content={config.openGraph.type}
      />
      <meta
        key='og:title'
        property='og:title'
        content={
          config.title
        }
      />
      <meta
        key='og:description'
        property='og:description'
        content={
          config.openGraph.description ??
          config.description
        }
      />
      <meta
        key='og:site_name'
        property='og:site_name'
        content={config.openGraph.site_name}
      />
      <meta
        key='og:url'
        property='og:url'
        content={config.openGraph.url}
      />

      <meta key='robots' name='robots' content={"index,follow"} />
      {children}
    </Head>
  )
}

export default SEO
