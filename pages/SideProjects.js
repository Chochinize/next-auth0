import React, { Children } from 'react'
import useUser from  '../lib/hooks'
import useSWR, { SWRConfig } from 'swr'
import {useState,useEffect} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import { route } from 'next/dist/server/router'
import Loader from '../Components/Loader'
import { session } from 'next-auth/client'
import { signIn,signOut,useSession} from 'next-auth/client'

const fetcher = (url)=> fetch(url).then((res)=>  res.json())
const API = 'http://localhost:3000/api/Pizza-Store'





const Pizzas  = ()=>{
    const {data}=useSWR(API,fetcher)
   
    const [basket,setBasket]  = useState([])
    const [add , setAdd]  = useState(false)
  
    const router = useRouter()
    const addToBasket = (ids,prod)=>{
        
    }  
    const sendData = ()=>{



        router.push('/payment')
    }
       
            
    const pizza  =  data.data.map((p,idx)=>(
    <div className='grid grid-cols-6 rounded-full  gap-7' key={idx}>

        
        <img src={p.image} className='border-2 rounded-full'/>
        <h1> {p.name}</h1>
        <h1> {p.description}</h1>
        <div onClick={()=>addToBasket(idx,p)}> Add</div>

       <div>
       </div>
       
        </div>
    ))
    const [session,loading] = useSession();
    return  <div> {!session && (
        <>
        Not  signed in 
        <button onClick={signIn}>Sign in</button>
    </>

     )}
     {session &&(
         <div>
             <h1 className='relative'>
                {pizza}
                <div className='absolute top-0   h-1/2 right-6 w-1/4'>
                    <aside className='w-150   border-2 '>
                        <header className='grid grid-rows-[1fr,1fr,3fr]'>
                            <h1 className='bg-red-200 text-center p-2 m-4'>
                                Your Orders
                            </h1>
                            <main className='p-6 m-4 h-max grid grid-rows-2  border-2 '>
                               {basket}
                     
                         
                               
                                    
                                 
                            
                            </main>
                        </header>
                            <div  className='border-2 p-6  m-6 text-center hover:bg-red-100' onClick={sendData}>  Proceed to payment </div>
                    </aside>
                </div>
         </h1>
         </div>
     )}
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
const SideProjects = ({fallback}) => {
   

    return (
        <SWRConfig value={{fallback}}>
           <Pizzas/>
        </SWRConfig>
    )
}
export default SideProjects
