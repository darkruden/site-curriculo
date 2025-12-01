"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 overflow-hidden">

            {/* Background Decorativo (Grid Sutil) */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

            <div className="max-w-4xl mx-auto space-y-8 z-10">

                {/* Badge de Status */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border/50 text-sm font-mono text-primary"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Available for new projects
                </motion.div>

                {/* Headline Principal */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-text-primary"
                >
                    Construindo software de{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                        alta performance
                    </span>{" "}
                    e inteligência.
                </motion.h1>

                {/* Subheadline / Elevator Pitch */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed"
                >
                    Engenheiro de Software focado em transformar problemas complexos em
                    soluções escaláveis. Especialista em
                    <span className="text-text-primary font-medium"> Next.js</span>,
                    <span className="text-text-primary font-medium"> Cloud Architecture</span> e
                    <span className="text-text-primary font-medium"> AI Integration</span>.
                </motion.p>

                {/* Botões de Ação (CTAs) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                >
                    <Link
                        href="/projetos"
                        className={cn(
                            "group flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                        )}
                    >
                        Ver Projetos
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <div className="flex gap-4">
                        <a
                            href="https://github.com/seu-usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-lg bg-surface border border-border text-text-secondary hover:text-white hover:border-primary/50 transition-all hover:scale-105"
                            aria-label="GitHub Profile"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/seu-usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-4 rounded-lg bg-surface border border-border text-text-secondary hover:text-white hover:border-primary/50 transition-all hover:scale-105"
                            aria-label="LinkedIn Profile"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}