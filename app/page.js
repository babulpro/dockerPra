import Link from "next/link";

export default function Home(){
  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Link href="/user" className="text-blue-500 hover:underline">getUsers</Link> 
      <Link href="/registation" className="text-blue-500 hover:underline mt-4">createUser</Link>
    </div>
  )
}