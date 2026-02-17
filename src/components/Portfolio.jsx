import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: 'Neon Tech Branding',
        category: 'Branding',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Complete brand identity overhaul for a tech startup.'
    },
    {
        id: 2,
        title: 'E-Commerce Growth',
        category: 'Marketing',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: '150% increase in sales through targeted Meta Ads.'
    },
    {
        id: 3,
        title: 'Fintech App UI/UX',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Modern, minimal interface for a financial application.'
    },
    {
        id: 4,
        title: 'Global SEO Campaign',
        category: 'SEO',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Ranking #1 for high-volume keywords in 3 continents.'
    },
    {
        id: 5,
        title: 'Luxury Real Estate',
        category: 'Development',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Immersive 3D website for high-end properties.'
    },
    {
        id: 6,
        title: 'Fashion Social Strategy',
        category: 'Marketing',
        image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        description: 'Viral social media campaign reaching 2M+ users.'
    }
];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Marketing', 'Development', 'Branding', 'SEO'];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section id="portfolio" className="py-24 px-4 bg-navy-900 relative">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-black opacity-30 z-0"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-electric-400 font-medium tracking-wide uppercase mb-2"
                    >
                        Our Work
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        Featured <span className="text-gold-500">Projects</span>
                    </motion.h3>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === category
                                    ? 'bg-electric-500 text-white border-electric-500 shadow-[0_0_15px_rgba(56,189,248,0.3)]'
                                    : 'bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-lg hover:shadow-[0_0_30px_rgba(0,0,0,0.3)]"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                <span className="text-electric-400 text-xs font-bold uppercase tracking-wider mb-2 block">
                                                    {project.category}
                                                </span>
                                                <h4 className="text-xl font-bold text-white mb-2">
                                                    {project.title}
                                                </h4>
                                                <p className="text-gray-300 text-sm hidden sm:block max-w-[90%]">
                                                    {project.description}
                                                </p>
                                            </div>
                                            <div className="bg-white/10 p-3 rounded-full backdrop-blur-sm hover:bg-electric-500 transition-colors duration-300">
                                                <ArrowUpRight size={20} className="text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
