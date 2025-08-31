import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'; // Import XMarkIcon
import ProfileImg from '../assets/myimage.png';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleLinkClick = () => {
        setToggleMenu(false);
    };

    return (
        <header className="flex justify-between items-center px-5 py-2 bg-primary fixed w-full z-20">
            <a href="#home" className="flex-shrink-0">
                <img 
                    src={ProfileImg} 
                    alt="Profile" 
                    className="h-10 w-10 rounded-full object-cover border-2 border-white"
                />
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
                <ul className="flex text-white font-hero-font">
                    <li className="nav-link mx-2"><a href="#" className="transition-colors duration-300 hover:text-[#18b3ab]">Home</a></li>
                    <li className="nav-link mx-2"><a href="#about" className="transition-colors duration-300 hover:text-[#18b3ab]">About</a></li>
                    <li className="nav-link mx-2"><a href="#projects" className="transition-colors duration-300 hover:text-[#18b3ab]">Projects</a></li>
                    <li className="nav-link mx-2"><a href="#Skills" className="transition-colors duration-300 hover:text-[#18b3ab]">Skills</a></li>
                    <li className="nav-link mx-2"><a href="#contact" className="transition-colors duration-300 hover:text-[#18b3ab]">Contact</a></li>
                </ul>
            </nav>
            
            {/* Mobile Navigation Menu */}
            <div className={`fixed top-0 right-0 w-64 h-full bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${toggleMenu ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="flex justify-end p-5">
                    <button onClick={() => setToggleMenu(false)} className="text-white">
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>
                <nav>
                    <ul className="flex flex-col items-center text-white font-hero-font">
                        <li className=" nav-link w-full text-center py-4"><a href="#" onClick={handleLinkClick} className="transition-colors duration-300 hover:text-[#18b3ab] text-xl">Home</a></li>
                        <li className=" nav-link w-full text-center py-4"><a href="#about" onClick={handleLinkClick} className="transition-colors duration-300 hover:text-[#18b3ab] text-xl">About</a></li>
                        <li className=" nav-link w-full text-center py-4"><a href="#projects" onClick={handleLinkClick} className="transition-colors duration-300 hover:text-[#18b3ab] text-xl">Projects</a></li>
                         <li className=" nav-link w-full text-center py-4"><a href="#Skills" onClick={handleLinkClick} className=" transition-colors duration-300 hover:text-[#18b3ab] text-xl">Skills</a></li>
                        <li className=" nav-link w-full text-center py-4"><a href="#contact" onClick={handleLinkClick} className=" transition-colors duration-300 hover:text-[#18b3ab] text-xl">Contact</a></li>
                    </ul>
                </nav>
            </div>
            
            {/* Mobile Menu Button (Hamburger) */}
            <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden text-white'>
                <Bars3Icon className='h-6 w-6'/>
            </button>
        </header>
    );
}