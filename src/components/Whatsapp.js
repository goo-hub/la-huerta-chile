import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Whatsapp = () => {
    return (
        <>
            <Link to={'https://wa.link/k2cwjg'} target='_blank'>
                <FaWhatsapp className="text-white bg-primary hover:bg-accent hover:text-primary transition-colors duration-1000 ease-in-out fixed text-5xl bottom-10 right-10 cursor-pointer rounded-full p-2 box-content z-30" />
            </Link>
        </>
    );
}

export default Whatsapp;