"use client";

import { motion } from "framer-motion";
import { ACHIEVEMENTS } from "@/Lib/data";
import { Trophy, CheckCircle2 } from "lucide-react";

export default function KeyAchievements() {
    return (
        <section className="py-24 px-6 relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 -z-10" />

            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="md:w-1/3"
                    >
                        <div className="sticky top-24">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                <Trophy className="text-yellow-500" size={32} />
                                Key <span className="text-gradient">Achievements</span>
                            </h2>
                            <p className="text-zinc-400 leading-relaxed mb-8">
                                Beyond just coding, I focus on delivering impact. Here are some of the milestones that define my engineering journey so far.
                            </p>

                            <div className="p-6 bg-zinc-900 rounded-xl border border-white/5">
                                <h4 className="text-white font-semibold mb-2">What I'm Looking For</h4>
                                <p className="text-sm text-zinc-400">
                                    I am eager to join a dynamic engineering team as a <span className="text-white">Full Stack or Backend Developer</span>,
                                    working on challenging problems at scale using .NET or Node.js ecosystems.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="md:w-2/3 grid gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {ACHIEVEMENTS.map((achievement, index) => (
                            <motion.div
                                key={achievement.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4 p-6 glass-card rounded-xl hover:bg-white/5 transition-colors"
                            >
                                <div className="shrink-0 mt-1">
                                    <CheckCircle2 className="text-primary" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                                    <p className="text-zinc-400">{achievement.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
