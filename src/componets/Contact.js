import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import FadeIn from './FadeIn';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
    const form = useRef();
    const [status, setStatus] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('Sending...');

        emailjs.sendForm(
            'service_ymvlg1c',      // Your EmailJS Service ID
            'template_ejyngd8',     // Your EmailJS Template ID
            form.current,
            'DVsmEGf0JZyi1Jszi'       // Your EmailJS Public Key
        )
        .then((result) => {
            console.log(result.text);
            setStatus('Message sent successfully!');
            form.current.reset();
        }, (error) => {
            console.log(error.text);
            setStatus('Failed to send message. Please try again.');
        });
    };

    return (
        <section id="contact" className="bg-primary px-5 py-20 text-white">
            <FadeIn>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold relative inline-block">
                        Contact Me
                        <span className="block w-full h-1 bg-[#18b3ab] mt-2 rounded"></span>
                    </h2>
                    <p className="text-gray-400 mt-4">Get in touch! I'd love to hear from you.</p>
                </div>
                
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    {/* Left Column: Contact Info */}
                    <div className="flex flex-col justify-center space-y-8">
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-teal-400 text-2xl"/>
                            <div>
                                <h3 className="font-bold text-lg">Email</h3>
                                <a href="mailto:arun202608@gmail.com" className="text-gray-300 hover:text-teal-400">arun202608@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaPhone className="text-teal-400 text-2xl"/>
                            <div>
                                <h3 className="font-bold text-lg">Phone</h3>
                                <a href="tel:+918148645255" className="text-gray-300 hover:text-teal-400">+91 8148645255</a>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-teal-400 text-2xl"/>
                            <div>
                                <h3 className="font-bold text-lg">Location</h3>
                                <p className="text-gray-300">Salem, Tamil Nadu, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-gray-800 shadow-lg rounded-lg p-8">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="mb-6">
                                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="from_name">Name</label>
                                <input className="w-full bg-transparent border-b-2 border-gray-600 focus:border-teal-400 text-gray-200 py-2 outline-none transition-all" id="from_name" type="text" name="from_name" required />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="from_email">Email</label>
                                <input className="w-full bg-transparent border-b-2 border-gray-600 focus:border-teal-400 text-gray-200 py-2 outline-none transition-all" id="from_email" type="email" name="from_email" required />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="message">Message</label>
                                <textarea className="w-full bg-transparent border-b-2 border-gray-600 focus:border-teal-400 text-gray-200 py-2 outline-none transition-all h-24" id="message" name="message" required />
                            </div>
                            <div className="flex items-center justify-between">
                                <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition-all" type="submit">Send</button>
                                {status && <p className={`text-sm ${status === 'Message sent successfully!' ? 'text-green-500' : 'text-red-500'}`}>{status}</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
