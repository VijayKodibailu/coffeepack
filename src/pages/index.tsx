import type { NextPage } from 'next'


import { formatPrice, storefront } from '../utils'
import Link from 'next/link'

import tw from "twin.macro";
import { TopSection } from "../components/TopSection";
import { ExploreSection } from "../components/ExploreSection";
import { Footer } from "../components/footer";

const AppContainer = tw.div`
  flex
  flex-col
  w-full
  h-full
  overflow-hidden
`;

const Home: NextPage = ({products}:any) => {




  return (
    <>
     <AppContainer>
      <TopSection />
      <ExploreSection />

    </AppContainer>


      </>


  )
}

export default Home


export async function getStaticProps() {
  const {data} = await storefront(productsQuery)
  return {
    props: {
      products:data.products
    }
  }
}

const gql = String.raw
// # products(first:9) {

const productsQuery = gql`
query Products {
    products(first:10){
    edges{
      node{
        title
        handle
        tags
        priceRange{
          minVariantPrice{
            amount
          }
        }
        images(first:1){
          edges{
            node{
              transformedSrc
              altText
            }
          }
        }
      }
    }
  }
}
`


