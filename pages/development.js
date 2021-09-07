import Head  from 'next/head'
import React from 'react'
import Link from  'next/link'
import {signIn,signOut,useSession} from 'next-auth/client'
const Development = () => {

    const [session,loading] = useSession();
  
    return (
        <div className='bg-blue-200'>{!session && (
            <>
                Not  signed in 
                {loading}
                <button onClick={signIn}>Sign im</button>
            </>
        )}
        {session &&  (
            <>
            Signed in as {session?.user?.name}
            <div>You  can acces now  this  cdsadasdsadontent</div>
            <button onClick={signOut}>sign out</button>
            </>
        )}
        </div>
    ) 

  
     
    }
 



export default Development;