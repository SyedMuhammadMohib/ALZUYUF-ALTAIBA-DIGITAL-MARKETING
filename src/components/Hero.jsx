import React from 'react';
import { motion } from 'framer-motion';
import HeroBackground from './HeroBackground';
import { ChevronRight, ArrowDown } from 'lucide-react';

const Hero = () => {
    return (
        <section
            id="hero"
            className="w-full h-screen relative flex items-center justify-center overflow-hidden bg-navy-900"
        >
            <HeroBackground />

            {/* Overlay Gradient with Noise Texture hint */}
            <div className="absolute inset-0 bg-gradient-to-b from-navy-900/40 via-transparent to-navy-900 z-0 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none mix-blend-overlay"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="flex flex-col items-center"
                >
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-electric-500/30 bg-electric-500/10 backdrop-blur-md">
                        <span className="text-electric-400 font-medium tracking-wider text-sm uppercase">
                            A New Era of Digital Excellence
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
                        <span className="block text-white glow-text drop-shadow-2xl">
                            ALZUYUF
                        </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 text-gradient-gold drop-shadow-lg">
                            ALTAIBA
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-gray-300 mb-12 font-light leading-relaxed">
                        Elevating Brands in the Digital World using data-driven strategies
                        and immersive experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full max-w-lg">
                        <a
                            href="#contact"
                            className="group relative w-full sm:w-auto overflow-hidden bg-electric-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] hover:-translate-y-1"
                        >
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                            <span className="relative flex items-center justify-center">
                                Get a Free Consultation
                                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                        <a
                            href="#services"
                            className="w-full sm:w-auto glass hover:bg-white/5 border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:border-electric-400/50 hover:text-electric-300 hover:-translate-y-1"
                        >
                            View Our Services
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
                <span className="text-xs tracking-widest text-gray-400 uppercase">
                    Scroll
                </span>
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <motion.div
                        className="w-1.5 h-1.5 bg-electric-400 rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
