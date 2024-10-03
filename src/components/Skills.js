import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Navbar() {
    useEffect(() => {
        AOS.init({ duration: 500 });  // Initialize AOS with optional settings
    }, []);
    return (
        <>
            <section class="bg-black h-screen text-white" id="skills">
                <div class="container h-screen flex flex-col justify-center mx-auto text-center">
                    <h2 class="text-4xl font-bold mb-8" data-aos="fade-up">Skills</h2>
                    <div class="justify-center items-center align-middle grid grid-cols-2 md:grid-cols-3 mx-2 gap-8">
                        <div class="skill-item bg-white text-black p-4 rounded-full" data-aos="flip-left">
                            <h3 class="font-bold text-xl">HTML/CSS</h3>
                        </div>
                        <div class="skill-item bg-white text-black p-4 rounded-full" data-aos="flip-right">
                            <h3 class="font-bold text-xl">JavaScript</h3>
                        </div>
                        <div class="skill-item bg-white text-black p-4 rounded-full" data-aos="flip-right">
                            <h3 class="font-bold text-xl">Django</h3>
                        </div>
                        <div class="skill-item bg-white text-black p-4 rounded-full" data-aos="flip-right">
                            <h3 class="font-bold text-xl">TailwindCSS</h3>
                        </div>
                        <div class="skill-item bg-white text-black p-4 rounded-full" data-aos="flip-right">
                            <h3 class="font-bold text-xl">Python</h3>
                        </div>
                        <div class="skill-item bg-white text-black p-4 rounded-full" data-aos="flip-right">
                            <h3 class="font-bold text-xl">React</h3>
                        </div>
                        
                    </div>
                </div>
            </section>

        </>
    );
}
