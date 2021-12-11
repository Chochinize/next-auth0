import { useState } from "react";
import Link from "next/link";

const Backend = ({ potes }) => {
  const API = process.env.API;
  const [log, setLog] = useState(false);

  const LogOn = () => {
    setLog(!log);
  };
console.log(potes)
  return (
    <div>

      {potes.data.map((item) => (
        <div className="border-b-2 grid grid-cols-6  space-x-3 md:text-xl text-xs  truncate  "  key={item._id}>
          
          <Link href={`${API}/api/users/${item._id}`}>
            <a className="bg-blue-500  text-center  text-white">{item.username}</a>
          </Link>
          <Link href={`${API}/api/users/${item._id}`}>
            <a className="bg-indigo-300 text-center  truncate">{item.email}</a>
          </Link>
          <Link href={`${API}/api/users/${item._id}`}>
            <a className="bg-red-400  text-center  truncate">{item.password}</a>
          </Link>
          <Link href={`${API}/${item._id}`}>
            <a className="bg-red-500  text-center  truncate">{item.date}</a>
          </Link>
          <Link href={`${API}/api/users/${item._id}`}>
            <a className="bg-red-700  text-center  truncate">{item._id}</a>
          </Link>

          <button onClick={() => LogOn()} className="bg-red-200">
            edit file
          </button>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(process.env.USERS_API);
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { potes: data },
  };
}

export default Backend;
