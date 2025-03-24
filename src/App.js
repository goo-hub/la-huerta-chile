
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-800 text-gray-900">
      <Navbar />
      <Hero />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;

