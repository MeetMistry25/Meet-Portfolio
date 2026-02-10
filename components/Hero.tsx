"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Download, Terminal } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-20">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl delay-1000 animate-pulse" />
            </div>

            <div className="max-w-5xl mx-auto z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-2 mb-6">
                        <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Available for Full-Time Roles
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                        Building Scalable <br />
                        <span className="text-gradient">Secure Web Systems.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-8 leading-relaxed">
                        Full Stack Developer specializing in <span className="text-white font-medium">ASP.NET Core</span>, <span className="text-white font-medium">Angular</span>, and <span className="text-white font-medium">MERN</span>.
                        I engineer high-performance backends and intuitive interfaces for enterprise-grade applications.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <Link
                            href="#projects"
                            className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-all flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={20} />
                        </Link>

                        <a
                            href="/Meetkumar Mistry_CV.pdf"
                            download
                            className="px-8 py-4 glass-card rounded-lg font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
                        >
                            Download Resume <Download size={20} />
                        </a>

                        <div className="flex items-center gap-4 ml-2">
                            <Link href="https://github.com/MeetMistry25" target="_blank" className="p-4 glass-card rounded-lg hover:text-primary transition-colors hover:-translate-y-1">
                                <Github size={24} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/meet-mistry-25092004m" target="_blank" className="p-4 glass-card rounded-lg hover:text-primary transition-colors hover:-translate-y-1">
                                <Linkedin size={24} />
                            </Link>
                        </div>
                    </div>


                </motion.div>
            </div>
        </section>
    );
}
