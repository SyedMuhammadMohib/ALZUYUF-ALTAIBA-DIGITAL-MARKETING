import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        alert('Message sent! We will get back to you soon.');
    };

    return (
        <section id="contact" className="py-24 px-4 bg-navy-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-electric-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-electric-400 font-medium tracking-wide uppercase mb-2"
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">Project</span>
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div>
                            <h4 className="text-3xl font-bold mb-6 text-white">Let's Discuss Your Ideas</h4>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                Ready to take your brand to the next level? Contact us today for a free consultation and let's build something amazing together.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="glass-card p-6 rounded-2xl flex items-start gap-5 hover:border-electric-500/30 transition-all duration-300 group">
                                <div className="p-4 bg-navy-900/80 rounded-xl text-electric-400 border border-white/5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-white mb-2 text-lg">Our Location</h5>
                                    <p className="text-gray-400 leading-relaxed">Dubai , United Arab Emirates</p>
                                </div>
                            </div>

                            <div className="glass-card p-6 rounded-2xl flex items-start gap-5 hover:border-electric-500/30 transition-all duration-300 group">
                                <div className="p-4 bg-navy-900/80 rounded-xl text-electric-400 border border-white/5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-white mb-2 text-lg">Email Us</h5>
                                    <p className="text-gray-400 leading-relaxed">mohibmohammad38@gmail.com</p>
                                </div>
                            </div>

                            <div className="glass-card p-6 rounded-2xl flex items-start gap-5 hover:border-electric-500/30 transition-all duration-300 group">
                                <div className="p-4 bg-navy-900/80 rounded-xl text-electric-400 border border-white/5 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h5 className="font-bold text-white mb-2 text-lg">Call Us</h5>
                                    <p className="text-gray-400 leading-relaxed">+971 585110336</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-premium p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-electric-500/20 blur-[50px] pointer-events-none"></div>

                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 ml-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-navy-900/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-electric-400/50 focus:ring-1 focus:ring-electric-400/50 transition-all duration-300"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 ml-1">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-navy-900/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-electric-400/50 focus:ring-1 focus:ring-electric-400/50 transition-all duration-300"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2 ml-1">Subject</label>
                                <div className="relative">
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-navy-900/60 border border-white/10 rounded-xl px-5 py-4 text-white appearance-none focus:outline-none focus:border-electric-400/50 focus:ring-1 focus:ring-electric-400/50 transition-all duration-300"
                                    >
                                        <option value="" disabled>Select a Service</option>
                                        <option value="Social Media">Social Media Marketing</option>
                                        <option value="SEO">SEO</option>
                                        <option value="Web Development">Website Development</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 1.5L6 6.5L11 1.5" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 ml-1">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full bg-navy-900/60 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-electric-400/50 focus:ring-1 focus:ring-electric-400/50 transition-all duration-300 resize-none"
                                    placeholder="Tell us about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-electric-500 to-electric-600 hover:from-electric-400 hover:to-electric-500 text-white font-bold py-4 rounded-xl shadow-[0_10px_20px_-10px_rgba(56,189,248,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(56,189,248,0.6)] transition-all duration-300 flex items-center justify-center gap-2 group transform hover:-translate-y-1"
                            >
                                Send Message
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
