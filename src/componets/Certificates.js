
import mcp from '../assets/mcp.png';
import C from '../assets/c.jpg';
import C1 from '../assets/c1.jpg';
import C2 from '../assets/c2.jpg';
import C3 from '../assets/c3.jpg';
import C4 from '../assets/c4.jpg';
import C5 from '../assets/c5.jpg';

import { useState, useRef } from 'react';
import FadeIn from './FadeIn';


export default function Certificates() {
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
        <section id="certificates" className="px-5 py-20 bg-primary text-white">
            <FadeIn>
                <div>
                    <h2 className="text-3xl font-bold text-center mb-12 relative">
                        Certificates
                        <span className="block w-16 h-1 bg-[#18b3ab] mx-auto mt-2 rounded"></span>
                    </h2>
                    <div className="relative overflow-hidden w-full max-w-6xl mx-auto">
                        <div className="flex carousel-track" ref={trackRef}>
                            {/* Certificate Card 1 */}
                            <div className="carousel-card w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3">
                                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex items-center justify-center p-4">
                                    <img src={mcp} alt="mcp certificate" className="w-full h-auto object-contain  "  />
                                </div>

                            </div>
 

                            {/* Certificate Card 3 */}
                            <div className="carousel-card w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3">
                                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex items-center justify-center p-4">
                                    <img src={C1} alt="mahendra workshop" className="w-full h-auto object-contain" />
                                </div>
                            </div>

                           
                             {/* Certificate Card 5 */}
                            <div className="carousel-card w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3">
                                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex items-center justify-center p-4">
                                    <img src={C3} alt="" className="w-full h-auto object-contain" />
                                </div>
                            </div>
                             {/* Certificate Card 6 */}
                            <div className="carousel-card w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3">
                                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex items-center justify-center p-4">
                                    <img src={C4} alt="" className="w-full h-auto object-contain" />
                                </div>
                            </div>
                             {/* Certificate Card 7 */}
                            <div className="carousel-card w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3">
                                <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full flex items-center justify-center p-4">
                                    <img src={C5} alt="" className="w-full h-auto object-contain" />
                                </div>
                            </div>
                             {/* Certificate Card 8 */}
                            
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