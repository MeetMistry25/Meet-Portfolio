"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/Lib/data";

export default function Skills() {
    return (
        <section className="py-24 px-6 relative overflow-hidden bg-zinc-950">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical <span className="text-gradient">Arsenal</span></h2>
                    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                        My preferred stack for building reliable, scalable, and secure applications.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {SKILLS.map((category, catIndex) => (
                        <div key={category.category}>
                            <motion.h3
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1 }}
                                className="text-2xl font-bold text-white mb-8 border-l-4 border-primary pl-4"
                            >
                                {category.category}
                            </motion.h3>

                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                                {category.items.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 + catIndex * 0.1 }}
                                        whileHover={{ y: -5 }}
                                        className="group relative p-6 bg-zinc-900/50 border border-white/5 rounded-xl flex flex-col items-center gap-4 hover:bg-zinc-800/50 transition-all duration-300"
                                        style={{ "--hover-color": skill.color } as React.CSSProperties}
                                    >
                                        <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[var(--hover-color)] opacity-50 transition-colors duration-300 pointer-events-none" />

                                        <div className="relative w-12 h-12 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                                            {/* Using standard img to avoid next/image domain config issues for external CDNs */}
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                className="w-full h-full object-contain"
                                                loading="lazy"
                                            />
                                        </div>

                                        <span className="font-medium text-zinc-400 group-hover:text-white transition-colors">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
