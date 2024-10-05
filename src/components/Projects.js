import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects() {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);

    return (
        <>
            <section className="bg-white text-black py-10 min-h-screen" id="projects">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl sm:text-4xl font-bold mb-8 text-center" data-aos="fade-up">
                        Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        <div className="project-item mx-auto w-full max-w-[20rem] sm:max-w-[30rem] bg-black text-white p-4 sm:p-6 lg:p-8 rounded-lg" data-aos="zoom-in">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">Nepolio</h3>
                            <p className="text-justify text-xs sm:text-sm lg:text-base">
                                Developed a NEPSE portfolio management website that automatically
                                scrapes and updates stock market data from a specific website in real
                                time. Key features include:
                                <br />• User account creation and authentication.
                                <br />• Real-time display of scraped stock market data updated live.
                                <br />• Personalized portfolio management for tracking user-specific
                                stocks.
                                <br />• Detailed view of individual stock performance.
                                <br />• Real-time calculation of profit and loss for user portfolios.
                                <br />
                                <strong>Technologies used:</strong>
                                <br />• Django (backend framework)
                                <br />• Django-Tailwind (UI/UX design)
                                <br />• BeautifulSoup (web scraping)
                                <br />• JavaScript (frontend functionality)
                                <br />
                                Source code for this project can be viewed{' '}
                                <a className="underline text-blue-500" href="https://github.com/ayushpokharel98/nepolio">
                                    HERE!
                                </a>
                            </p>
                        </div>

                        <div className="project-item mx-auto w-full max-w-[20rem] sm:max-w-[30rem] bg-black text-white p-4 sm:p-6 lg:p-8 rounded-lg" data-aos="zoom-in">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">Chatty</h3>
                            <p className="text-justify text-xs sm:text-sm lg:text-base">
                                Built an interactive chat application with real-time messaging and responsive design. Key features include: <br />
                                • User account creation and authentication. <br />
                                • Ability to add friends and create personal chat connections. <br />
                                • Real-time messaging using web-sockets for seamless communication.<br />
                                <strong>Technologies used:</strong><br />
                                • Django (backend framework) <br />
                                • TailwindCSS (responsive design) <br />
                                • JavaScript (real-time interaction) <br />
                                Source code for this project can be viewed <a href="https://github.com/ayushpokharel98/chatty" className="underline text-blue-500">HERE!</a>
                            </p>
                        </div>

                        <div className="project-item mx-auto w-full max-w-[20rem] sm:max-w-[30rem] bg-black text-white p-4 sm:p-6 lg:p-8 rounded-lg" data-aos="zoom-in">
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">CommuniNepal</h3>
                            <p className="text-justify text-xs sm:text-sm lg:text-base">
                                Developed a simple, responsive social media platform where users can interact and share updates. Key features include: <br />
                                • User account creation and profile management. <br />
                                • Profile updates and personalization. <br />
                                • Posting updates and interacting via the main feed. <br />
                                <strong>Technologies used:</strong>
                                • Django (backend framework) <br />
                                • Django-Tailwind (UI/UX design) <br />
                                Source code for this project can be viewed <a href="https://github.com/ayushpokharel98/communiNepal" className="underline text-blue-500">HERE!</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
