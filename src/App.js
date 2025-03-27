import { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";
import Loader from "./components/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <Loader />
  }
  return (
    <>

      <div className=" bg-gray-800 text-gray-900">
        <Navbar />
        <Hero />
        <Servicios />
        <Contacto />
        <Footer />
        <Whatsapp />
      </div>
    </>
  );
}

export default App;

