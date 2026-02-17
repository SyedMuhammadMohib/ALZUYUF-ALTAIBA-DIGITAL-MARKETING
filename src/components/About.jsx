import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
    const cards = [
        {
            icon: <Lightbulb size={32} className="text-electric-400" />,
            title: 'Innovation',
            description: 'We blend creativity with technology to craft unique digital experiences.',
        },
        {
            icon: <Target size={32} className="text-gold-400" />,
            title: 'Strategy',
            description: 'Data-driven approaches that target the right audience at the right time.',
        },
        {
            icon: <TrendingUp size={32} className="text-electric-400" />,
            title: 'Growth',
            description: 'Scalable solutions designed to maximize ROI and business expansion.',
        },
    ];

    return (
        <section id="about" className="py-24 px-4 relative overflow-hidden bg-navy-900/50">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-800 via-navy-900 to-black opacity-40 z-0"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-electric-500/30 bg-electric-500/10 backdrop-blur-md">
                            <span className="text-electric-400 font-medium tracking-wider text-sm uppercase">
                                About Us
                            </span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                            Pioneering the Future of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                                Digital Marketing
                            </span>
                        </h3>
                        <p className="text-gray-300 text-lg mb-6 leading-relaxed border-l-4 border-electric-500 pl-6">
                            AT ALZUYUF ALTAIBA, we don't just follow trends; we create them. As a premier
                            digital marketing agency, we specialize in transforming brands through innovative
                            strategies and cutting-edge technology.
                        </p>
                        <p className="text-gray-400 text-base mb-8 leading-relaxed">
                            Our team of experts combines creative flair with analytical precision to deliver
                            results that matter. From SEO to immersive web experiences, we are your partners in
                            digital excellence.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-6 glass-card rounded-xl text-center hover:scale-105 transition-transform duration-300">
                                <span className="block text-4xl font-bold text-electric-400 mb-1">500+</span>
                                <span className="text-sm text-gray-400 uppercase tracking-widest">
                                    Projects Completed
                                </span>
                            </div>
                            <div className="p-6 glass-card rounded-xl text-center hover:scale-105 transition-transform duration-300">
                                <span className="block text-4xl font-bold text-gold-400 mb-1">98%</span>
                                <span className="text-sm text-gray-400 uppercase tracking-widest">
                                    Client Satisfaction
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="glass-card p-8 rounded-2xl flex items-start gap-6 group hover:border-electric-500/50"
                            >
                                <div className="p-4 bg-navy-900/80 rounded-xl text-white border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                                    {card.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-3 text-white group-hover:text-electric-400 transition-colors">
                                        {card.title}
                                    </h4>
                                    <p className="text-gray-400 leading-relaxed font-light">
                                        {card.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
