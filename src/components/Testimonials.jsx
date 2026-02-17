import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'CEO, TechFlow',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        content: 'ALZUYUF ALTAIBA transformed our online presence. Their strategic approach to SEO and content marketing doubled our traffic in just 3 months.'
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Marketing Director, EcoStyle',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        content: 'The team is incredibly professional and innovative. Their 3D web design capabilities gave us a competitive edge that no other agency could match.'
    },
    {
        id: 3,
        name: 'Emily Davis',
        role: 'Founder, Luxe Interiors',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
        content: 'From branding to social media, they handled everything seamlessly. Our engagement rates have skyrocketed since working with them.'
    }
];

const Testimonials = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent((current + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrent((current - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [current]);

    return (
        <section id="testimonials" className="py-24 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-electric-400 font-medium tracking-wide uppercase mb-2"
                    >
                        Testimonials
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        What Our <span className="text-gold-500">Clients Say</span>
                    </motion.h3>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="absolute top-0 left-0 -translate-x-12 -translate-y-12 text-navy-800 pointer-events-none hidden md:block">
                        <Quote size={120} />
                    </div>

                    <div className="glass p-8 md:p-12 rounded-2xl relative z-10 min-h-[300px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="w-full"
                            >
                                <div className="flex flex-col md:flex-row items-center gap-8">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={testimonials[current].image}
                                            alt={testimonials[current].name}
                                            className="w-24 h-24 rounded-full border-4 border-electric-500/20 object-cover"
                                        />
                                    </div>

                                    <div className="flex-1 text-center md:text-left">
                                        <div className="flex justify-center md:justify-start gap-1 mb-4 text-gold-400">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <Star key={star} size={18} fill="currentColor" />
                                            ))}
                                        </div>

                                        <p className="text-xl md:text-2xl text-gray-200 italic mb-6">
                                            "{testimonials[current].content}"
                                        </p>

                                        <div>
                                            <h4 className="text-lg font-bold text-white">{testimonials[current].name}</h4>
                                            <p className="text-electric-400">{testimonials[current].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <button
                        onClick={prev}
                        className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 p-3 rounded-full bg-navy-800 text-white hover:bg-electric-500 transition-colors z-20 shadow-lg"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={next}
                        className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 p-3 rounded-full bg-navy-800 text-white hover:bg-electric-500 transition-colors z-20 shadow-lg"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrent(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? 'bg-electric-500 w-8' : 'bg-gray-600 hover:bg-gray-500'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
