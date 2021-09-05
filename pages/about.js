import {useContext} from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Main from '../Components/Main'
import {useState} from 'react'
import AppContext from '../Context/state'
const About = ({potes}) => {

const {Add,state} = useContext(AppContext)
const [box,setBox]=useState(false);
const [show,setShow]=useState(false);

console.log(potes)


    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 border-2 border-black m-6">  
       
    <Head>
        <title>CHOCHINIZE</title>
        <meta name='viewport' content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/CHOCHINIZE.svg"  />
      </Head>

        {potes.data.map(d=>{
            return (<div>
                <h1>{d.name}</h1>
            </div>)
        })}
    
      <div className=' border-b-2  list-none'>
            <li className='my-10 text-xs'>SHADOW TEXT   </li>
            <li className='shadowtext text-white '>SHADOW TEXT</li>
        </div>
        
    </div>
    );
}
export async function getStaticProps(){

    
    const res = await fetch('http://localhost:3000/api/people/');
    const data = await res.json();
    

    
    return {
        props:{potes:data}
    }
}

export default About;