import { getProductsInCollection } from "../lib/shopify";
import Head from "next/head";

//components
import ProductList from "../components/ProductList";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Modern eCommerce</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
        <meta name="description" content="Modern eCommerce. Static Site Generation"/>
        <meta property="og:title" content="Modern eCommerce" />
        <meta property="og:description" content="Modern eCommerce. Static Site Generation" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shopynext.vercel.app/" />
        <meta property="og:image" content="https://shopynext.vercel.app/share.jpg" />
        <meta property="og:site_name" content="Modern eCommerce" />
      </Head>
      <ProductList products={products} />
    </>
  )
}

export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: {products},
  }
}
