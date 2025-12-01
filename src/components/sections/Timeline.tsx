"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Star } from "lucide-react";

interface Milestone {
    date: string;
    title: string;
    description: string;
}

export function Timeline({ items }: { items: Milestone[] }) {
    return (
        <div className="relative border-l border-border/50 ml-3 md:ml-6 space-y-12">
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 md:pl-12"
                >
                    {/* Ícone da Timeline */}
                    <div className="absolute -left-[11px] top-1 bg-background border border-primary/30 p-1 rounded-full text-primary shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                        <Briefcase size={12} />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <h3 className="text-lg font-bold text-text-primary">
                            {item.title}
                        </h3>
                        <span className="text-xs font-mono py-1 px-2 rounded bg-surface border border-border text-text-secondary w-fit">
                            {item.date}
                        </span>
                    </div>

                    <p className="text-text-secondary leading-relaxed max-w-2xl">
                        {item.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
}