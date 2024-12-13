import React from 'react';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';

function ContactUs() {
    return (
        <div className="h-screen flex items-center justify-center bg-black text-white mt-20 md:mt-0">
            <div className="mx-auto py-14 px-4 lg:px-20 2xl:px-60">
                <div className="flex flex-col gap-12 md:flex-row justify-center items-center">
                    {/* Text Section */}
                    <div className="md:w-1/3">
                        <h2 className="text-lg md:text-2xl font-bold text-center mb-6">Contact Us</h2>
                        <p className="text-center text-sm md:text-lg my-4">
                            We'd love to hear from you! Reach out to us to discuss your needs or ask any questions. We're here to help.
                        </p>
                        <div className="flex justify-center gap-6 mt-6">
                            {/* Email Icon */}
                            <a href="mailto:info@7dtechnologies.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                                <FaEnvelope className="text-2xl md:text-3xl text-[#0CC0DF] hover:text-white transition-colors" />
                            </a>
                            {/* WhatsApp Icon */}
                            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                <FaWhatsapp className="text-2xl md:text-3xl text-[#0CC0DF] hover:text-white transition-colors" />
                            </a>
                            {/* Location Icon */}
                            <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" aria-label="Location">
                                <FaMapMarkerAlt className="text-2xl md:text-3xl text-[#0CC0DF] hover:text-white transition-colors" />
                            </a>
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="flex flex-col md:w-1/3 justify-center items-center space-y-6">
                        <img
                            src={`${import.meta.env.BASE_URL}logoWH.svg`}
                            alt="PPI"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
