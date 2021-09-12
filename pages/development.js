import useSWR, { SWRConfig } from 'swr'
import Head  from 'next/head'
import React from 'react'
import Link from  'next/link'
import  axios from 'axios'
import dbConnect from '../utilis/dbConnection';
import Basket from '../models/basket';
import {useEffect}  from 'react'


const fetcher = (url) => fetch(url).then((res) => res.json());
const API = "http://localhost:3000/api/handler";

const Development = ({resources}) => {
    const parsed = JSON.parse(resources)
    
    

    const sendDataToBackEnd  = async ()=>{ 
        await axios.post(API, {count:'11',price:'1',item:'s1'})
     
    }
   
   

    return (
        <SWRConfig value={resources}>

        <div className='bg-blue-200  w-max'>
            <Articles/>
          
            <button onClick={sendDataToBackEnd}>Send Dataaa</button> 
            
        </div>
                </SWRConfig>
    ) 
}
    
const  Articles= ()=>{

    const {data} = useSWR(API,fetcher)
   console.log('DIS IS DATA',data)
        
            return  <div className='min-h-screen bg-indigo-500  text-white bg-gradient-to-tl from-transparent to to-black  m-6 tranpa'>
             <h1>
                 HELLO{data && data.data.map(oo=>{
                     return(
                         <div>
                             {oo.count}
                         </div>
                     )
                 })}
             </h1>
         </div>

}


    export async function getServerSideProps() {
      

            dbConnect()
            const bas = await Basket.find({})
            const  data=  JSON.stringify(bas)

        return {
          props: {
            resources:data
          }
        };
      }
    export default Development;


