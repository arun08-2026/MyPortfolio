import { useState, useRef } from 'react';
import FadeIn from './FadeIn';
import mcpimg from '../assets/mcpnew.jpeg';
import Calculaterpimg from '../assets/calculatorimg.png';

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef(null);

    // This function handles the sliding logic for the carousel
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
        <section id="projects" className="px-5 py-20 bg-primary text-white">
            <FadeIn>
                <div>
                    <h2 className="text-3xl font-bold text-center mb-12 relative">
                        Projects
                        <span className="block w-16 h-1 bg-[#18b3ab] mx-auto mt-2 rounded"></span>
                    </h2>
                    <div className="relative overflow-hidden w-full max-w-6xl mx-auto">
                        <div className="flex carousel-track" ref={trackRef}>
                            {/* Card 1: Simon Game */}
                            <div className="carousel-card w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3">
                                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                                    <img src={mcpimg} alt="Simon Game" className="w-full h-48 object-cover" />
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-semibold mb-2">Learning Path Generator with Model Context Protocol (MCP)</h3>
                                        <p className="text-gray-400 mb-4 flex-grow">This project is a Streamlit-based web application that generates personalized learning paths using the Model Context Protocol (MCP). It integrates with various services including YouTube, Google Drive, and Notion to create comprehensive learning experiences.</p>
                                        <div className="mt-auto">
                                            <a href="https://mcp-learning-path-generator-by-arun.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-teal-400 font-semibold hover:underline mr-4">Live Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2: Calculator */}
                            <div className="carousel-card w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3">
                                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                                    <img src={Calculaterpimg} alt="Calculator" className="w-full h-48 object-cover" />
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-semibold mb-2">Calculator</h3>
                                        <p className="text-gray-400 mb-4 flex-grow">Built a fully functional calculator using HTML, CSS, and JavaScript with support for basic arithmetic operations.</p>
                                        <div className="mt-auto">
                                            <a href="https://arun202608-lab.github.io/Calculater/" target="_blank" rel="noopener noreferrer" className="text-teal-400 font-semibold hover:underline mr-4">Live Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3: Drum Kit */}
                            <div className="carousel-card w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3">
                                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
                                    <img src="#" alt="Drum Kit" className="w-full h-48 object-cover"/>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-semibold mb-2">Drum Kit</h3>
                                        <p className="text-gray-400 mb-4 flex-grow">Created a virtual drum kit that plays different sounds on keypress using JavaScript.</p>
                                        <div className="mt-auto">
                                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-teal-400 font-semibold hover:underline mr-4">Live Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
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