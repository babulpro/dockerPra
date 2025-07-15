import Link from "next/link";
import Navbar from "../allComponets/Navbar";
import Carousel from "../allComponets/Carousel";
import Footer from "../allComponets/Footer";

export default function Home(){

  return(
    <div>
      <Navbar/>

      <div className="grid md:grid-cols-2 gap-4 p-4 mt-10">
        <div>
              <Carousel images={['/images/1.jpg','/images/2.jpg','/images/3.jpg','/images/4.jpg','/images/5.jpg','/images/6.jpg','/images/7.jpg','/images/8.jpg','/images/9.jpg']} />

        </div>
        <div className="flex items-center justify-center h-full">
          <div>
              <h1 className="text-4xl font-bold text-center text-gray-500 underline">
            Wellcome to home of fish
          </h1>
          <p className="text-md text-gray-700">Number One Fish Marker In the Bangladesh.</p>
          </div>
        </div>

      </div>

      <div className="mt-10">
        <Footer/>
      </div>
        {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <Link href="/user" className="text-blue-500 hover:underline">getUsers</Link> 
          <Link href="/registation" className="text-blue-500 hover:underline mt-4">createUser</Link>
        </div> */}
    </div>
  )
}