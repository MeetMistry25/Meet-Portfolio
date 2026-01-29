"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/5 bg-black/20 backdrop-blur-sm mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex flex-col gap-2">
                    <p className="text-sm text-zinc-400">
                        © {new Date().getFullYear()} Meetkumar Mistry. All rights reserved.
                    </p>
                    <p className="text-xs text-zinc-600">
                        Built with Next.js, Tailwind, and Supabase.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    <Link
                        href="https://github.com/MeetMistry25"
                        target="_blank"
                        className="text-zinc-400 hover:text-white transition-colors"
                    >
                        <Github size={20} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/meetkumar-mistry-97501126b"
                        target="_blank"
                        className="text-zinc-400 hover:text-white transition-colors"
                    >
                        <Linkedin size={20} />
                    </Link>
                    <Link
                        href="https://x.com/MMistry_25"
                        target="_blank"
                        className="text-zinc-400 hover:text-white transition-colors"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </Link>
                    <Link
                        href="mailto:meetkumarmistry25@gmail.com"
                        className="text-zinc-400 hover:text-white transition-colors"
                    >
                        <Mail size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
