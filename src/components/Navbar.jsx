import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 border-b border-transparent ${isScrolled ? 'glass-premium py-3 border-white/10' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0 flex items-center group cursor-pointer">
                        <a href="#" className="font-bold text-2xl tracking-wider text-white relative">
                            ALZUYUF <span className="text-gold-400 group-hover:text-gold-300 transition-colors">ALTAIBA</span>
                            <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-electric-400 group-hover:w-full transition-all duration-300"></div>
                        </a>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setActiveLink(link.name)}
                                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 group ${activeLink === link.name ? 'text-white' : 'text-gray-400 hover:text-electric-300'
                                        }`}
                                >
                                    {link.name}
                                    <span
                                        className={`absolute bottom-0 left-0 h-0.5 bg-electric-400 transition-all duration-300 ${activeLink === link.name ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}
                                    ></span>
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="glass border border-electric-500/30 text-electric-300 hover:text-white hover:bg-electric-500/20 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.1)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
                            >
                                Get Started
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none transition-transform duration-300 transform active:scale-95"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden absolute w-full glass-premium border-b border-white/10 transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                    }`}
            >
                <div className="px-4 pt-4 pb-6 space-y-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${activeLink === link.name
                                    ? 'bg-white/5 text-electric-400'
                                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                                }`}
                            onClick={() => {
                                setActiveLink(link.name);
                                setIsOpen(false);
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
