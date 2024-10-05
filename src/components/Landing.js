import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Navbar() {
    useEffect(() => {
        AOS.init({ duration: 500 });  // Initialize AOS with optional settings
    }, []);
    return (
        <>
            <section className="h-screen bg-black text-white flex flex-col justify-center items-center text-center p-4" id="home">
                <h1 className="text-4xl animate-pulse sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-down">
                    Hi, I'm Ayush
                </h1>

                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in-down delay-150">
                    A Django Developer Crafting Scalable Web Applications
                </p>

                <a href="#projects" className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300">
                    See My Work
                </a>
            </section>

        </>
    );
}
