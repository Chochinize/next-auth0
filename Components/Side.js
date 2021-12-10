import React from 'react'

import useSWR, { SWRConfig } from 'swr'

const fetcher = (url)=> fetch(url).then((res)=>  res.json())
const API = 'https://next-auth0-livid.vercel.app/api/Pizza-Store'


const SideProjects = ({fallback}) => {
   
    return (
        <SWRConfig value={{fallback}}>
            <Pizzas/>
        </SWRConfig>
    )
}


const Pizzas  = ()=>{
    const {data}=useSWR(API,fetcher)
    const pizza  =  data.data.map(p=>(
    <div className='grid grid-cols-2 gap-10'>
           
        <img src={p.image}/>
       <div>
           <h1>{p.name}</h1>
           <h2>{p.description}</h2>
       </div>
        </div>
    ))
    return  <div>
         <h1>
                {pizza}
         </h1>
     </div>
}


export async function getStaticProps(){


    


    const info = await fetcher(API)
    
   
    
   return {
   
    props:{
        fallback:{
            [API]:info
        }
        },
        revalidate:3

       
   }
}
export default SideProjects
