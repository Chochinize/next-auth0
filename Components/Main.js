import Link from 'next/link'
import Image from 'next/image'
import AppContext from '../Context/state'
import {useContext} from 'react'
import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import { SiIcloud } from "@react-icons/all-files/si/SiIcloud";


const Main = (props) => {
<i class="fab fa-github-square"></i>
    const {state} = useContext(AppContext)

    console.log(props.down)
    let flex = 'border-2      transition duration-150 ease-in-out '
    return (
        
        <div className={flex}>
            <div className='text-xs border-2 border-black  ' >
              {props.down }</div>
           
        </div>
      );
}
 
export default Main;