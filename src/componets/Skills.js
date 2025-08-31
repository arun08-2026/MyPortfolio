import { useState, useRef } from 'react';
import FadeIn from './FadeIn';
// Correctly import all icons, including Spring Boot from 'si'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaReact, FaDatabase, FaBootstrap, FaPython } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

export default function Skills() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef(null);

    const handleSlide = (direction) => {
        const track = trackRef.current;
        if (!track || !track.children[0]) return;
        const cardWidth = track.children[0].offsetWidth;
        const newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
        if (newIndex < 0) return;
        const visibleCards = Math.floor(track.offsetWidth / cardWidth);
        const maxIndex = track.children.length - visibleCards;
        if (newIndex > maxIndex) return;
        setCurrentIndex(newIndex);
        track.style.transform = `translateX(-${newIndex * cardWidth}px)`;
    };

    return (
        <section id="Skills" className="px-5 py-20 bg-primary text-white">
            <FadeIn>
                <div>
                    <h2 className="text-3xl font-bold text-center mb-12 relative">
                        Skills & Technologies
                        <span className="block w-16 h-1 bg-[#18b3ab] mx-auto mt-2 rounded"></span>
                    </h2>
                    <div className="relative overflow-hidden w-full max-w-6xl mx-auto">
                        <div className="flex carousel-track" ref={trackRef}>
                            {/* Card 1: HTML5 */}
                            <div className="carousel-card w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 p-3"><div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-3 h-full"><FaHtml5 size={50} className="text-orange-500" /><span className="font-semibold text-white">HTML5</span></div></div>
                            {/* Card 2: CSS3 */}
                            <div className="carousel-card w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 p-3"><div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-3 h-full"><FaCss3Alt size={50} className="text-blue-500" /><span className="font-semibold text-white">CSS3</span></div></div>
                            {/* Card 3: Bootstrap */}
                            <div className="carousel-card w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 p-3"><div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-3 h-full"><FaBootstrap size={50} className="text-purple-500" /><span className="font-semibold text-white">Bootstrap</span></div></div>
                            {/* Card 4: Tailwind CSS */}
                            <div className="carousel-card w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 p-3"><div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-3 h-full"><img width="50" height="50" src="https://img.icons8.com/color/96/tailwind_css.png" alt="tailwind_css" /><span className="font-semibold text-white">Tailwind CSS</span></div></div>
                            {/* Card 5: JavaScript */}
                            <div className="carousel-card w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 p-3"><div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-3 h-full"><FaJsSquare size={50} className="text-yellow-500" /><span className="font-semibold text-white">JavaScript</span></div></div>
                            {/* Card 6: React */}
                            <div className="carousel-card w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 p-3"><div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-3 h-full"><FaReact size={50} className="text-blue-400" /><span className="font-semibold text-white">React</span></div></div>
                            {/* Card 7: Python */}
                            <div className="carousel-card w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 p-3"><div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-3 h-full"><FaPython size={50} className="text-yellow-400" /><span className="font-semibold text-white">Python</span></div></div>
                            {/* Card 8: Spring Boot */}
                            <div className="carousel-card w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 p-3"><div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-3 h-full"><SiSpringboot size={50} className="text-green-500" /><span className="font-semibold text-white">Spring Boot</span></div></div>
                            {/* Card 9: Java */}
                            <div className="carousel-card w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 p-3"><div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-3 h-full"><FaJava size={50} className="text-red-500" /><span className="font-semibold text-white">Java</span></div></div>
                            {/* Card 10: SQL */}
                            <div className="carousel-card w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 p-3"><div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-3 h-full"><FaDatabase size={50} className="text-gray-400" /><span className="font-semibold text-white">SQL</span></div></div>
                            {/* Card 11: C Programming */}
                            <div className="carousel-card w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 p-3"><div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-3 h-full"><img width="60" height="60" src="https://img.icons8.com/color/96/c-programming.png" alt="c-programming" /><span className="font-semibold text-white">C</span></div></div>
                        </div>
                        {/* Carousel Buttons */}
                        <button onClick={() => handleSlide('prev')} className="carousel-button prev absolute top-1/2 left-0 -translate-y-1/2 bg-gray-700/50 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10">&#10094;</button>
                        <button onClick={() => handleSlide('next')} className="carousel-button next absolute top-1/2 right-0 -translate-y-1/2 bg-gray-700/50 hover:bg-gray-700 rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10">&#10095;</button>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}