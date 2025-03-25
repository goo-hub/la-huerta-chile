
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";

function App() {
  return (
    <>
      {/* <div className="flex lg:hidden w-full h-screen flex-col p-12 justify-center items-center bg-accent">
        <h1 className="text-7xl text-left w-full">La Huerta Chile</h1>
        <p className="text-lg">Pronto llegaremos a tu móvil, por el momento corre a ver este sitio en tu computadora más cercana.</p>
      </div> */}
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

