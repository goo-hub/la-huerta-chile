const logo1 = require('../assets/logo-1.png');
const logo2 = require('../assets/logo-2.png');
const logo3 = require('../assets/logo-3.png');
const logo4 = require('../assets/logo-4.png');
const logo5 = require('../assets/logo-5.png');
const logo6 = require('../assets/logo-6.png');
const logo7 = require('../assets/logo-7.png');
const logo8 = require('../assets/logo-8.png');
const logo9 = require('../assets/logo-9.png');
const logo10 = require('../assets/logo-10.png');
const logo11 = require('../assets/logo-11.png');
const logo12 = require('../assets/logo-12.png');
const logo13 = require('../assets/logo-13.png');
const logo14 = require('../assets/logo-14.png');
const logo15 = require('../assets/logo-15.png');
const logo16 = require('../assets/logo-16.png');
const logo17 = require('../assets/logo-17.png');
const logo18 = require('../assets/logo-18.png');
const logo19 = require('../assets/logo-19.png');

const Marquee = () => {
    return (
        <>
            <div className="flex overflow-hidden group">
                <div className="flex space-x-16 animate-loop-scroll group-hover:paused">
                    <img loading="lazy" src={logo1} className="h-8 max-w-none" alt="Image 1" />
                    <img loading="lazy" src={logo2} className="h-8 max-w-none" alt="Image 2" />
                    <img loading="lazy" src={logo3} className="h-8 max-w-none" alt="Image 3" />
                    <img loading="lazy" src={logo4} className="h-8 max-w-none" alt="Image 4" />
                    <img loading="lazy" src={logo5} className="h-8 max-w-none" alt="Image 5" />
                    <img loading="lazy" src={logo6} className="h-8 max-w-none" alt="Image 6" />
                    <img loading="lazy" src={logo7} className="h-8 max-w-none" alt="Image 7" />
                    <img loading="lazy" src={logo8} className="h-8 max-w-none" alt="Image 8" />
                    <img loading="lazy" src={logo9} className="h-8 max-w-none" alt="Image 9" />
                    <img loading="lazy" src={logo10} className="h-8 max-w-none" alt="Image 10" />
                    <img loading="lazy" src={logo11} className="h-8 max-w-none" alt="Image 1" />
                    <img loading="lazy" src={logo12} className="h-8 max-w-none" alt="Image 2" />
                    <img loading="lazy" src={logo13} className="h-8 max-w-none" alt="Image 3" />
                    <img loading="lazy" src={logo14} className="h-8 max-w-none" alt="Image 4" />
                    <img loading="lazy" src={logo15} className="h-8 max-w-none" alt="Image 5" />
                    <img loading="lazy" src={logo16} className="h-8 max-w-none" alt="Image 6" />
                    <img loading="lazy" src={logo17} className="h-8 max-w-none" alt="Image 7" />
                    <img loading="lazy" src={logo18} className="h-8 max-w-none" alt="Image 8" />
                    <img loading="lazy" src={logo19} className="h-8 max-w-none" alt="Image 9" />
                </div>
            </div>

        </>);
}

export default Marquee;