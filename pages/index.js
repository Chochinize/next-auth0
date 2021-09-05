import Head from 'next/head'
import Main from '../Components/Main'
import Navbar from './../Components/Navbar'
import {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image'
import  {useUser} from  '../lib/hooks'
import useSWR, { SWRConfig } from 'swr';
import dbConnect from '../utilis/dbConnection';
// import Users from '../models/Users'


export default  function  Home() {
// const bb = async()=>{
    //   const c = await mutate();
    
    //   const maper = c.data.map(i=>{
        


    //     return    <div> OK </div>
    //   })
    
    //   return <div>ALLES GOOD</div>
    // }
    // bb()



    

    return (
      

    <div className="flex flex-row  min-h-screen py-2 border-2 border-black m-6 sm:flex-row ">
      <Head>
        <title></title>
        <link rel="icon" href="/favicon.ico" />
   
      </Head>
      
     
      <div className='grid grid-cols-[1fr,2fr] w-full m-4 sm:grid-cols-[1fr,2fr,1fr] text-center relative border-2  list-none'>
          <div>1</div>
          <div className=' flex flex-wrap border-l-2 gap-2 border-r-2'>
          </div>
          <h1>HIER IewqeqwS </h1>
          <li className='hidden  sm:block'> 2</li>
      </div>
    
    
     

    </div>

)
  


}
