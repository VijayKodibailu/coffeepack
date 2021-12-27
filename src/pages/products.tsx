import type { NextPage } from 'next'


import { formatPrice, storefront } from '../utils'
import Link from 'next/link'
import { NavBar } from '../components/NavBar'

const Home: NextPage = ({products}:any) => {




  return (
    <>
      {/* <Head>
        <title>Coffee Pack</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <div className='

      bg-amber-800     

          w-full

          '>

      <NavBar />
      </div>
        <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
  


          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left lg:left-0 lg:w-1/2 ">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">bhavaearth</span>{' '}
      

                <span className="text-2xl block text-brown-800 xl:inline">

                   Creating blissful experience
        
                </span>
              </h1>
            

              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">

              Bhava Coffee: Indian Coffee with a Global Appeal Today’s good mood is sponsored by coffee It 
              is often said that a bad day with coffee is much better than a good day without one. 
              Well, coffee is just what one needs to kick start a new day,
              to enhance your mood and uplift your spirit. 
              A great way to bond over conversations, good ideas often start with great coffee.    
              As an ode to this humble beverage and with the aim to fulfil the needs of coffee lovers, 
              Bhava coffee presents a plethora of artisanal blends to satiate the tastes of...
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start pb-6">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                   Buy Now 
                  </a>
                </div>
                {/* <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div> */}
              </div>
            </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:pr-6 overflow-hidden ">
        <img
          className="h-56 object-cover sm:h-72  md:h-96 lg:h-full"
          // src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          src="./Coffee-Wallpaper.jpg"
          alt="coffee wallpaper"
        />
      </div>
          </main>
        </div>

    </div>
  

    <div className="max-w-2xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.edges.map((item: { node: any }) => {
            const product = item.node
            const image = product.images.edges[0].node
            return (
              <Link 
              key={product.handle} href={`/products/${product.handle}`} >
            <a 
            className="group">
              <div className="w-full aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-8 xl:aspect-h-6">
                <img
                  src={image.transformedSrc}
                  alt={image.altText}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className='mt-4 flex items-center justify-between text-base font-medium text-gray-900'>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {formatPrice(product.priceRange.minVariantPrice.amount)}</p>
              </div>
              <p className='mt-1 text-sm italic text-gray-500'>{product.tags[0]}</p>
            </a>
              </Link>
          )
            }
          )
          }
            
        </div>
      </div>


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

