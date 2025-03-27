const logo = require('../assets/logo_black.png')

const Loader = () => {
    return (
        <>
            <div className="w-screen animated-background h-screen flex flex-col justify-center items-center bg-gradient-to-l from-primary via-lime-200 to-accent" >
                <div className="spinner">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <img src={logo} width={200} className='absolute bottom-24 left-[22%] sm:left-[35%] md:left[37%] lg:left-[40%] 2xl:left-[44%] 2k:left-[46%]' alt='logo la huerta chile' />

            </div>
        </>
    );
}

export default Loader;