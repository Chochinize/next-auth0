import { signIn, signOut, useSession } from "next-auth/client";

const Navbar = () => {
  const [session, loading] = useSession();
  return (
    <div className="grid justify-items-center p-4  mb-6   md:justify-items-end  bg-gradient-to-r from-purple-300 via-pink-500 to-blue-500  bg-yellow-300 shadow-2xl">
      
      <div className="">

        {!session && (
          <div  className="font-semibold text-black flex  space-x-2">
           <p>Not signed  </p> 
          <button className="font-bold" onClick={signIn}>Sign in</button>
        </div>
      )}
      </div>
      <div>

      {session && (
        <div className="flex pr-4  items-center w-max border-2 border-black rounded-full">
          <p className="text-2xl flex ">
            {/* {session?.user?.name} */}
          </p>
            <img src={session?.user?.image} className="w-10 h-10 rounded-full  cursor-pointer" />
            <p className="font-bold text-black cursor-pointer">{session?.user?.name} | </p>
          <button 
          className="ml-2  font-semibold"
          onClick={signOut}>Sign Out</button>
        </div>
      )}
      </div>
      </div>
  
  );
};

export default Navbar;
