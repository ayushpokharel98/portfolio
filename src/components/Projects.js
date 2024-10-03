import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Navbar() {
    useEffect(() => {
        AOS.init({ duration: 500 });  // Initialize AOS with optional settings
    }, []);
    return (
        <>
            <section class="bg-white text-black py-20" id="projects">
                <div class="container mx-auto">
                    <h2 class="text-4xl font-bold mb-8 text-center" data-aos="fade-up">Projects</h2>
                    <div class="grid grid-cols-1 gap-8">
                        <div class="project-item mx-auto w-96 sm:w-[80rem] bg-black text-white p-8 rounded-lg " data-aos="zoom-in">
                            <h3 class="text-2xl font-bold mb-4">Nepolio</h3>
                            <p className='text-justify'>Developed a NEPSE portfolio management website that automatically
                                scrapes and updates stock market data from a specific website in real
                                time. Key features include: <br />
                                • User account creation and authentication.<br />
                                • Real-time display of scraped stock market data updated live.<br />
                                • Personalized portfolio management for tracking user-specific
                                stocks.<br />
                                • Detailed view of individual stock performance.<br />
                                • Real-time calculation of profit and loss for user portfolios.<br />
                                <strong>Technologies used:</strong><br />
                                • Django (backend framework)<br />
                                • Django-Tailwind (UI/UX design)<br />
                                • BeautifulSoup (web scraping)<br />
                                • JavaScript (frontend functionality)<br />
                                Source code for this project can be viewed <a className='underline text-blue-500' href="https://github.com/ayushpokharel98/nepolio">HERE!</a> </p>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}
