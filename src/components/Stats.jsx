import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ end, duration, label }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let startTime;
            let animationFrame;

            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
                setCount(Math.floor(progress * end));

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(animate);
                }
            };

            animationFrame = requestAnimationFrame(animate);
            return () => cancelAnimationFrame(animationFrame);
        }
    }, [isInView, end, duration]);

    return (
        <div ref={ref} className="text-center p-6 glass rounded-xl">
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-gold-400 mb-2">
                {count}{label.includes('%') ? '%' : '+'}
            </div>
            <div className="text-gray-400 font-medium tracking-wide uppercase text-sm">
                {label.replace('%', '')}
            </div>
        </div>
    );
};

const Stats = () => {
    const stats = [
        { label: 'Clients Served', value: 250 },
        { label: 'Campaigns Managed', value: 1200 },
        { label: 'ROI Improvement %', value: 300 },
        { label: 'Team Experts', value: 45 }
    ];

    return (
        <section id="why-us" className="py-20 relative bg-navy-800/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-electric-400 font-medium tracking-wide uppercase mb-2"
                    >
                        Why Choose Us
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Results Driven <span className="text-gold-500">Performance</span>
                    </motion.h3>
                    <p className="max-w-3xl mx-auto text-gray-300 text-lg">
                        We deliver measurable results that impact your bottom line. Our track record speaks for itself.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <Counter
                            key={index}
                            end={stat.value}
                            duration={2}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
