import Head  from 'next/head'
import React from 'react'
import Link from  'next/link'
import {signIn,signOut,useSession} from 'next-auth/client'
const Development = () => {

    const [session,loading] = useSession()
  console.log(session.user)
    return (
        <div>{!session && (
            <>
                Not  signed in 
                <button onClick={signOut}>Sign in</button>
            </>
        )}
        {session &&  (
            <>
            Signed in as  
            <div>You  can acces now  this  content</div>
            <button onClick={signOut}>sign out</button>
            </>
        )}
        </div>
    ) 

  
     
    }
 



export default Development;