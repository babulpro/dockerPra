import Navbar from "../../allComponets/Navbar";
import Footer from "../../allComponets/Footer";

 
export default function RootLayout({ children }) {
  return (
      <div>
        <Navbar/>

        {children}
        <Footer/>
      </div>
        
      
  );
}
