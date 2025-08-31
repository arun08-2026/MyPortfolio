import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function FadeIn({ children }) {
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger the animation once
        threshold: 0.1,    // Trigger when 10% of the element is visible
    });

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-in-out ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
            {children}
        </div>
    );
}