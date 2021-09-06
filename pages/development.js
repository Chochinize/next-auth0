import Head  from 'next/head'
import React from 'react'
import Link from  'next/link'
import {signIn,signOut,useSession} from 'next-auth/client'
const Development = () => {

    const [session,loading] = useSession();
  
    return (
        <div>{!session && (
            <>
                Not  signed in 
                <button onClick={signIn}>Sign in</button>
            </>
        )}
        {session &&  (
            <>
            Signed in as martin asd  
            <div>You  can acces now  this  content</div>
            <button onClick={signOut}>sign out</button>
            </>
        )}
        </div>
    ) 

  
     
    }
 



export default Development;