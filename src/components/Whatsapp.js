import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Whatsapp = () => {
    return (
        <>
            <Link to={'https://web.whatsapp.com/send?phone=56966189492&text=Hola%20La%20Huerta%20Chile!%0D%0AJunto%20con%20saludar%2C%20solicito%20mayor%20informaci%C3%B3n'} target='_blank'>
                <FaWhatsapp className="text-white bg-primary hover:bg-accent hover:text-primary transition-colors duration-1000 ease-in-out fixed text-5xl bottom-10 right-10 cursor-pointer rounded-full p-2 box-content" />
            </Link>
        </>
    );
}

export default Whatsapp;