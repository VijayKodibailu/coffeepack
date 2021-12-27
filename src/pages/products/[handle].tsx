import { formatPrice, storefront } from "../../utils"
import {format} from 'date-fns'
import Link from "next/link"
import {useState} from 'react'
import { NavBar } from "../../components/NavBar"


const gql = String.raw

  


export default function ProductHandle({product, products}:any) {

    const [isLoading, setIsLoading] = useState(false)
    const image = product.images.edges[0].node
    const variantId = product.variants.edges[0].node.id 
    const relatedProducts = products.edges
        .filter((item: { node: { handle: any } }) => item.node.handle !== product.handle)
        .slice(0, 4)

    async function checkout() {
        setIsLoading(true)
        const {data} = await storefront(checkoutMutation, {variantId})
        console.log('data from mutation', data)
        const {webUrl} = data.checkoutCreate.checkout
        window.location.href = webUrl
    }

  return (
      <>
<div className='
     bg-amber-900     

     w-full
'
    >

<NavBar />
</div>
      <main className="mx-auto pt-14 px-4 sm:pt-24 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8">

          {/* Product */}
          <div className="lg:grid lg:grid-cols-7 lg:gap-x-8 lg:gap-y010 xl:gap-x-16">
              {/*product image */}
              <div className="lg: col-span-4">
                  <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
                      <img 
                          src={image.transformedSrc}
                          alt={image.altText}
                          className="object-center object-cover"
                      />
                  </div>
              </div>

              {/* Product details */}
              <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:col-span-3">
                  <div className="flex flex-col-reverse">
                      <div>
                          <h1 className="text-2xl font-extrabold tracking-tight 
                            text-gray-900 sm:text-3xl">
                                {product.title}
                            </h1>
                            <h2 id="information-heading" className="sr-only">
                                Product information
                            </h2>
                            <p className="text-sm text-gray-500 mt-2">
                                {product.tags[0]} &middot; Updated{ ' '}
                                <time dateTime={product.updatedAt}>
                                    {format(new Date(product.updatedAt), 'dd MMM yyyy')}     
                                </time>                              
                            </p>
                          
                      </div>
                  </div>

                  <p className="text-gray-500 mt-6">{product.description}</p>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                <button 
                onClick={checkout}
                type="button"
                    className="w-full bg-gray-900 border border-transparent rounded-md py-3
                    px-8 flex items-center justify-center text-base font-medium text-white
                    hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                    focus:ring-offset-gray-50 focus:ring-gray-500">

                        {isLoading && (
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24">
                                <circle className="opacity-75" cx="12" cy="12" r="10" 
                                    stroke="currentColor" stroke-Width="4"></circle>
                                <path className="oopacity-75" fill="currentColor" 
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.29A7">

                                </path>
                            </svg>
                        )}

                        Pay {formatPrice(product.priceRange.minVariantPrice.amount)}
                    </button>

                    <button
                        type="button"
                        className="w-full bg-white border rounded-md py-3
                        px-8 flex items-center justify-center text-base font-medium 
                        text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 
                        focus:ring-offset-2 focus:ring-offset-gray-50 
                        focus:ring-gray-500">
                            Preview
                        </button>  
                </div>

                <div className="border-t border-gray-200 mt-10 pt-10">
                            <h3 className="text-sm font-medium text-gray-900">License</h3>
                            <p className="mt-4 text-sm text-gray-500">
                
                                <a href='#'
                                className="font-medium text-gray-900 hover:text-gray-700">
                                    Read full license
                                </a>
                            </p>
                            </div>
                            </div>
                            </div>
            {/* Related products */}
            <div className="max-w-2xl mx-auto mt-24 sm:mt-32 lg:max-w-none">
                <div className="flex items-center justify-between space-x-4">
                    <h2 className="text-lg font-medium text-gray-900">
                        Customers also viewed
                    </h2>
                     <a 
                     href="/"
                     className="whitespace-nowrap text-sm font-medium text-">
                        View all <span aria-hidden="true">&rarr;</span> 
                    </a>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2
                    sm:gap-y-10 lg:grid-cols-4">
                        {relatedProducts.map((item: { node: any }) => {
                            const product = item.node 
                            const image = product.images.edges[0].node 
                            
                            return (
                                <div key={product.handle} className="relative group">
                                    <div className="aspect-w-4 aspect-h-3 rounded-lg 
                                    overflow-hidden bg-gray-100">
                                        <img 
                                            src={image.transformedSrc}
                                            alt={image.altText}
                                            className="object-center object-cover group-hover:opacity-75"
                                        />
                                    </div>
                                    <div className="mt-4 flex items-center justify-between text-base font-medium
                                    text-gray-900 space-x-8">
                                        <h3>
                                            <Link href={`/products/${product.handle}`}>

                                            <a>
                                                <span aria-hidden="true" className="absolute inset-0"/>
                                                {product.title}
                                            </a>
                                            </Link>
                                        </h3>
                                        <p>{formatPrice(product.priceRange.minVariantPrice.amount)}</p>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-500">
                                            {product.tags[0]}
                                        </p>
                                        </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
      </main>
</>
  )
}



  export async function getStaticPaths() {
      const {data} = await storefront(gql`
        {
            products(first:10){
                edges {
                    node {
                        handle
                    }
                }
            }
        } 
      `)
      return {
          paths: data.products.edges.map((product: { node: { handle: any } }) => ({params: {handle: product.node.handle}})),
          fallback: false,
      }
}

// @ts-ignore
export async function getStaticProps({params}) {
    const {data} = await storefront(singleProductQuery, {handle:params.handle})
    return {
        props: {
            product: data.productByHandle,
            products: data.products
        }
    } 
}

  const singleProductQuery = gql`
    query SingleProduct($handle: String!) {
        productByHandle(handle: $handle) {
            title
            handle
            description
            updatedAt
            tags
            priceRange {
                minVariantPrice {
                    amount
                }
            }
            images(first:1) {
                edges{
                    node {
                        transformedSrc
                        altText
                    }
                }
            }
            variants(first:1){
                edges{
                    node {
                        id
                    }
                }
            }
        }
        products(first:10) {
            edges {
                node {
                    title
                    handle
                    tags
                    priceRange{
                        minVariantPrice{
                            amount
                        }
                    }
                    images(first:1){
                        edges {
                            node {
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

     
const checkoutMutation = gql`
mutation CheckoutCreate($variantId: ID!) {
    checkoutCreate(input:{
      lineItems:{
        variantId: $variantId,
        quantity:1
      }
    }){
      checkout{
        webUrl
      }
    }
  }
`
    
   