import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <div className="py-24 px-6 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                {/* Left Column: Info */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                        I am currently a Web Development Intern at Outamation Technologies and a final-year Computer Engineering student.
                        I am passionate about building full-stack solutions and always open to discussing new projects and opportunities.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                                <a href="mailto:meetkumarmistry25@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
                                    meetkumarmistry25@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/5 rounded-lg text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Location</h3>
                                <p className="text-zinc-400">Ahmedabad, India</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-lg font-semibold text-white mb-6">Follow Me</h3>
                        <div className="flex gap-4">
                            <Link href="https://github.com/MeetMistry25" className="p-3 bg-white/5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                                <Github size={20} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/meetkumar-mistry-97501126b" className="p-3 bg-white/5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
                                <Linkedin size={20} />
                            </Link>
                            <Link href="https://x.com/MMistry_25" className="p-3 bg-white/5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all">
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
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div className="bg-zinc-900/30 glass p-8 md:p-10 rounded-3xl border border-white/5">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
