import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutSection() {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);

    return (
        <main className="bg-white overflow-hidden text-black h-screen" id="about">
            <div className="container mx-auto flex flex-col md:flex-row h-screen justify-center items-center px-4">
                <article className="sm:flex-1 md:mr-8 mb-6 md:mb-0" data-aos="fade-left">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">About Me</h2>
                </article>
                
                <article className="sm:flex-1" data-aos="fade-right">
                    <p className="text-lg sm:text-xl lg:text-2xl">
                        I am a Django developer with experience in building web applications. I specialize in creating scalable solutions with a focus on responsive design.
                    </p>
                </article>
            </div>
        </main>
    );
}
