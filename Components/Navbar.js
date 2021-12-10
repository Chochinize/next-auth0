import { signIn, signOut, useSession } from "next-auth/client";

const Navbar = () => {
  const [session, loading] = useSession();
  return (
    <nav className="flex justify-end  gap-6 m-8 p-10 bg-gradient-to-r from-purple-300 via-pink-500 to-blue-500  bg-yellow-300 shadow-xl">
      {!session && (
        <>
          Not signed in
          <button onClick={signIn}>Sign in</button>
        </>
      )}
      {session && (
        <div className="flex pr-4  items-center w-max border-2 border-black rounded-full">
          <p className="text-[16px] flex ">
            {/* {session?.user?.name} */}
          </p>
            <img src={session?.user?.image} className="w-10 h-10 rounded-full" />
            <p>{session?.user?.name}</p>
          <button 
          className="ml-2  font-semibold"
          onClick={signOut}>Sign Out</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
