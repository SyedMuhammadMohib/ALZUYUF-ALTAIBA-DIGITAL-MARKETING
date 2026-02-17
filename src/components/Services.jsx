import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Monitor, Search, BarChart, Globe, PenTool, Share2, ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ icon, title, description, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative p-8 glass-card rounded-2xl border border-white/5 hover:border-electric-500/30 overflow-hidden"
        >
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="text-electric-400" size={20} />
            </div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-navy-900/80 rounded-xl flex items-center justify-center mb-6 text-electric-400 group-hover:text-gold-400 group-hover:scale-110 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] border border-white/5 group-hover:border-gold-500/20">
                    {icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-electric-400 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {description}
                </p>

                <div className="pt-4 mt-auto border-t border-white/5 group-hover:border-electric-500/20 transition-colors">
                    <span className="text-xs font-medium text-gold-500 uppercase tracking-widest group-hover:text-electric-400 transition-colors">
                        Discover More
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

const Services = () => {
    const services = [
        {
            icon: <Share2 size={28} />,
            title: 'Social Media Marketing',
            description: 'Engage your audience with compelling social strategies and content that resonates across all platforms.'
        },
        {
            icon: <Search size={28} />,
            title: 'Search Engine Optimization',
            description: 'Dominate search results and drive organic traffic with our data-driven SEO techniques.'
        },
        {
            icon: <BarChart size={28} />,
            title: 'Google & Meta Ads',
            description: 'Maximize your ROI with targeted ad campaigns managed by our certified experts.'
        },
        {
            icon: <Monitor size={28} />,
            title: 'Website Development',
            description: 'Stunning, high-performance websites built to convert visitors into loyal customers.'
        },
        {
            icon: <PenTool size={28} />,
            title: 'Branding & Content',
            description: 'Build a memorable brand identity with professional logo design and storytelling.'
        },
        {
            icon: <Globe size={28} />,
            title: 'Global Marketing',
            description: 'Expand your reach beyond borders with our international marketing strategies.'
        }
    ];

    return (
        <section id="services" className="py-24 px-4 bg-navy-900 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-electric-500/10 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gold-500/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-400 text-sm font-medium mb-4">
                            OUR EXPERTISE
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        World-Class <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Digital Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-gray-400 text-lg"
                    >
                        Comprehensive solutions tailored to elevate your brand in the ever-evolving digital landscape.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
