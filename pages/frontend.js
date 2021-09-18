import {useEffect} from 'react'
import {useState} from 'react'
import { useRouter } from 'next/router'
import Basket from '../models/basket'
import axios  from  'axios'
import dbConnect from '../utilis/dbConnection'

const Frontend = ({resources}) => {
  
    console.log(resources)
    const [state,setState]  = useState('')
    const [falsy,setFalsy]  = useState(false)
    const [count,setCount] =  useState(1)
    const  add = ()=>{
       setFalsy(true)
       console.log(state)
    }

    useEffect(()=>{
        if(falsy){
          One()
        }
    },[])

    const One = async()=>{
        const router = useRouter()
            const API = 'http://localhost:3000/api/Cart'
        
            try {
                const res = await fetch(API,{
                    method:'GET',
                    headers:{
                        'Accept' : 'application/json',
                        'Content-type' : 'application/json'
                    },
                    body: JSON.stringify(count)
                })
              
            } catch (error) {
                console.log('Some error')
            }
    }

    return ( 
        <div className='min-h-screen bg-indigo-400 bg-gradient-to-br from-transparent to to-white  m-6'>
        
           <button className='border-2 p-4 bg-blue-400' onClick={add}>add 1</button>
           {resources}
      
            </div>
        
     );
}

export  async function getStaticProps               (ctx){

    

    dbConnect()
    
  
    // const res = await fetch('http://localhost:3000/api/Pizza-Store')
    // const data = await res.json()
   

    const bas = await Basket.find({})
    const st = JSON.stringify(bas)
    console.log(bas)
    return{
        props:{
            resources:st
        }
    }
}


export default Frontend;