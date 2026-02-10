"use client";

import { motion } from "framer-motion";

export default function GithubStats() {
    return (
        <section className="py-16 px-6 bg-zinc-900/30 border-y border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl font-bold mb-8">Concept to Code. Consistently.</h3>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    {/* Simulated GitHub Graph / Stats Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-6 glass-card rounded-xl w-full max-w-md"
                    >
                        <div className="flex justify-between items-end mb-4">
                            <div className="text-left">
                                <p className="text-xs text-zinc-500 uppercase font-bold">Total Contributions</p>
                                <p className="text-3xl font-bold text-white">450+</p>
                            </div>
                            <div className="text-right">
                                <p className="text-xs text-zinc-500 uppercase font-bold">Current Streak</p>
                                <p className="text-lg font-mono text-green-500">12 Days</p>
                            </div>
                        </div>
                        {/* Simulated visual graph bars */}
                        <div className="flex gap-1 h-12 items-end justify-between opacity-50">
                            {[40, 70, 30, 85, 50, 20, 90, 60, 45, 80, 25, 65, 35, 95, 55, 15, 75, 45, 85, 60].map((height, i) => (
                                <div key={i} className="w-full bg-primary rounded-t-sm" style={{ height: `${height}%` }} />
                            ))}
                        </div>
                    </motion.div>

                    <div className="text-left space-y-4">
                        <p className="text-zinc-400">
                            I commit code daily. My GitHub reflects my passion for continuous learning and building.
                        </p>
                        <a
                            href="https://github.com/MeetMistry25"
                            target="_blank"
                            className="text-primary hover:underline font-medium"
                        >
                            Check out my profile →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
