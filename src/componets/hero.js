import ProfImg from '../assets/profimage.png';
import resumeimg from '../assets/ArunS-Resume-final.pdf';
import {
    AiOutlineTwitter,
    AiOutlineLinkedin,
    AiOutlineFacebook,
    AiOutlineYoutube,
    AiOutlineGithub,
    AiOutlineWhatsApp
} from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
    return (
        <section id="home" className='  flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col justify-center text-center md:text-left'>
                <h1 className='text-white text-6xl font-bold font-hero-font'>
                    Hi <span className="about-style-emoji">👋</span>,<br/>I'm <span className='text-blue-500'>Arun</span>
                </h1>
                
                <TypeAnimation
                    sequence={[
                        "I'm a Frontend Developer..👨‍💻", 1000,
                        "I build amazing web site.", 1000,
                        "I love to code.", 1000,
                    ]}
                    wrapper="p"
                    speed={50}
                    className='text-3xl py-6 animated-gradient'
                    repeat={Infinity}
                />

                <div className='flex justify-center md:justify-start'>
                    <a href='https://x.com/arunarnold0809' className="pr-5 text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"><AiOutlineTwitter size={40} /></a>
                    <a href='https://www.linkedin.com/in/arun-s-2026bc/' className="pr-5 text-gray-400 hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"><AiOutlineLinkedin size={40} /></a>
                    <a href='https://github.com/arun202608-lab' className="pr-5 text-gray-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"><AiOutlineGithub size={40} /></a>
                    
                    {/* Updated WhatsApp Link */}
                    <a href='https://wa.me/918148645255' target="_blank" rel="noopener noreferrer" className="pr-5 text-gray-400 hover:text-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"><AiOutlineWhatsApp size={40} /></a>
                    
                    <a href='https://www.youtube.com/channel/UChSikF8uagWQ5Q4PpR5H5zA' className="pr-5 text-gray-400 hover:text-red-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"><AiOutlineYoutube size={40} /></a>
                    
                </div>

                <div className="mt-8 flex justify-center md:justify-start pb-10">
                    <a
                        href={resumeimg}
                        download
                        className="group btn-gradient text-white font-bold py-3 px-6 rounded-lg flex items-center"
                    >
                        My Resume
                        <FaArrowRight className="ml-2 transition-transform duration-300 transform group-hover:rotate-90" />
                    </a>
                </div>
            </div>
            <img className='md:w-1/3 py-10 profile-img' src={ProfImg} alt="Profile"/>
        </section>
    );
}
