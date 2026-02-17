import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-navy-900 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            ALZUYUF <span className="text-gold-500">ALTAIBA</span>
                        </h3>
                        <p className="text-gray-400 mb-6">
                            Elevating brands in the digital world through innovation, strategy, and cutting-edge technology.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                <a key={index} href="#" className="text-gray-400 hover:text-electric-400 transition-colors">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {['About Us', 'Services', 'Portfolio', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-gold-400 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
                        <ul className="space-y-3">
                            {['Social Media Marketing', 'SEO', 'PPC Advertising', 'Web Development'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="mr-3 text-electric-400 flex-shrink-0" size={20} />
                                <span className="text-gray-400">Dubai , United Arab Emirates</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="mr-3 text-electric-400 flex-shrink-0" size={20} />
                                <span className="text-gray-400">+971 585110336</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="mr-3 text-electric-400 flex-shrink-0" size={20} />
                                <span className="text-gray-400">mohibmohammad38@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-gray-500">
                        &copy; {new Date().getFullYear()} ALZUYUF ALTAIBA DIGITAL MARKETING. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
