import React, { Children } from 'react'
import Link from 'next/link'
import useSWR, { SWRConfig } from 'swr'
import {useState,useEffect} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import { session } from 'next-auth/client'
import { signIn,signOut,useSession,getCsrfToken,getSession } from 'next-auth/client'
import axios from 'axios'


import dbConnect from '../../utilis/dbConnection'



const fetcher = (url)=> fetch(url).then((res)=>  res.json())
const API = 'http://https://next-auth0-livid.vercel.app/api/Pizza-Store'




const SideProjects = ({fallback}) => {
   
      
    return (
        <SWRConfig value={{fallback}}>
           <Pizzas call={fallback} />
       
        </SWRConfig>
    )
}





const Pizzas  = ({call,dii})=>{
    
   
    const {data}=useSWR(API,fetcher)

    
    
   

    const router = useRouter()
    const [basket,setBasket]  = useState([])
    const [add , setAdd]  = useState(false)
  
    const addToBasket = (ids,prod)=>{
        setBasket([
            ...basket,
            prod
        ])
    }  
    
    
    
    const sendData = ()=>{
        router.push('/payment')
    }
       
         
    const pizza  =  data.data.map((p,idx)=>(
    <div  key={idx}>
        
        <Link href={`/SideProjects/${p._id}`}  key={idx}>
            <a className='grid grid-cols-6 rounded-full  gap-7'>

        <img src={p.image} className='border-2 rounded-full'/>
        
        <h1> {p.name}</h1>
        <h1> {p.description}</h1>
            </a>
        </Link>
        
        
        
       <div>
       </div>
       
        </div>
    ))







    const [session,loading] = useSession();
    
 

console.log(session)
    return  <div> 
     {session &&(
         <div>
             <h1 className='relative'>
                {pizza}
                {/* <div className='absolute top-0   h-1/2 right-6 w-1/4'>
                    <aside className='w-150   border-2 '>
                        <header className='grid grid-rows-[1fr,1fr,3fr]'>
                            <h1 className='bg-red-200 text-center p-2 m-4 h-12'>
                                Your Orders
                            </h1>
                            
                            <main className='p-6 m-4 h-max grid grid-rows-2  border-2 '>
                              

                     
                         
                               
                                    
                                 
                            
                            </main>
                        </header>
                            // <div  className='border-2 p-6  m-6 text-center hover:bg-red-100' onClick={sendData}>  Proceed to payment </div>
                    </aside>
                </div> */}
                
         </h1>
         </div>
     )}
     </div>
}


export async function getStaticProps(){
    
    

    // const LoadCart = axios.get(API);
    // console.log(LoadCart)
    // if(!pass){
    //     return {
    //         redirect:{
    //             destination:'/SignIn',
    //             permaent:false,
    //         },
    //     }
    // }
// dbConnect()
    
  
    // const res = await fetch('http://localhost:3000/api/Pizza-Store')
    // const data = await res.json()
   

    // const bas = await Basket.find({})
    // const st = JSON.stringify(bas)
    
    const info = await fetcher(API)
    
   
    
   return {
   
    props:{
        fallback:{
            [API]:info
        },
    //     diit:st,
    //    token:pass
        },
       
   }
}

export default SideProjects
