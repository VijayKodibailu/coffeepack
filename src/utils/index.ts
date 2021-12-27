
    

export async function storefront(query: any, variables={}) {

  if (
    process.env.NEXT_PUBLIC_API_URL === undefined ||
    process.env.NEXT_PUBLIC_ACCESS_TOKEN === undefined
     ) {
      throw new Error(`Missing API URL or Access Token from .env`);
    } 

    const URL = process.env.NEXT_PUBLIC_API_URL

    const options = {
      endpoint: URL,
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": process.env.NEXT_PUBLIC_ACCESS_TOKEN,
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables})
    }
  
    try {
      const data = await fetch(URL, options).then(response => {
        return response.json()
      })
  
      return data
    } catch (error) {
      throw new Error("Products not fetched")
    }
  }


  export function formatPrice(number: number | bigint) {
      return Intl.NumberFormat('en-AU', {
          style: "currency", 
          currency:"AUD", 
          minimumFractionDigits:0
        }
    ).format(number)
  }