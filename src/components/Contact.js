import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);

    const sendEmail = (event) => {
        event.preventDefault(); 

        const name = event.target.name.value;
        const email = event.target.email.value;
        const message = event.target.message.value;

        const mailtoLink = `mailto:ayushpokharel98@gmail.com?subject=From Portfolio - ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;

        window.location.href = mailtoLink;
    };

    return (
        <section className="bg-black text-white h-screen" id="contact">
            {/* Flexbox centering */}
            <div className="container flex flex-col justify-center items-center h-full mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center" data-aos="fade-up">Get in Touch</h2>

                <form className="max-w-lg w-full" onSubmit={sendEmail} data-aos="fade-up">
                    {/* Name Field */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="name"
                            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring focus:ring-indigo-500 focus:outline-none"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring focus:ring-indigo-500 focus:outline-none"
                            placeholder="Your Email"
                            required
                        />
                    </div>

                    {/* Message Field */}
                    <div className="mb-4">
                        <textarea
                            name="message"
                            className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring focus:ring-indigo-500 focus:outline-none"
                            rows="5"
                            placeholder="Your Message"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-500 transition-colors duration-300 rounded-lg">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
