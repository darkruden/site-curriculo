"use client";

import { motion } from "framer-motion";
import { TechPill } from "@/components/ui/TechPill";
import { skillsData } from "@/content/skills";

export function Skills() {
    return (
        <section className="py-24 px-4 bg-background relative border-t border-border/40">
            <div className="max-w-4xl mx-auto space-y-12">

                {/* Cabeçalho da Seção */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center space-y-4"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-text-primary">
                        Arsenal Técnico
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        Uma visão geral das tecnologias que utilizo para transformar problemas em soluções de software robustas.
                    </p>
                </motion.div>

                {/* Grid de Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="space-y-4 p-6 rounded-2xl bg-surface/50 border border-border/50 hover:border-primary/20 transition-colors"
                        >
                            <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((skill) => (
                                    <TechPill key={skill} name={skill} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}