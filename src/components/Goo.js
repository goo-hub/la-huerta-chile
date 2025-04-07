import { Link } from 'react-router-dom';

const logoGoo = require('../assets/logo-goo.png')

const Goo = () => {
    return (
        <>
            <div className="flex justify-center items-center gap-2 py-2 text-sm bg-black text-white text-center z-50">
                <p>Powered by:</p>
                <Link to={'https://dev.goohub.digital.com'} target='_blank'><img src={logoGoo} alt="Logo Goo" className="w-12 invert" /></Link>
            </div>
        </>
    );
}

export default Goo;