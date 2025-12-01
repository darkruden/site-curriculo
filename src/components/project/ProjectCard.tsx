"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/lib/schemas";
import { TechPill } from "@/components/ui/TechPill";

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col bg-surface border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300"
        >
            {/* Badge de Resultado (O Diferencial) */}
            <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-background/80 backdrop-blur text-xs font-bold text-secondary border border-secondary/30 shadow-lg">
                    {project.result_quantified}
                </span>
            </div>

            {/* Área Visual (Placeholder para Imagem) */}
            <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 group-hover:scale-105 transition-transform duration-500 relative">
                {/* Aqui virá a <Image /> do Next.js no futuro */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-700 font-mono text-4xl opacity-20">
                    {project.title.substring(0, 2)}
                </div>
            </div>

            {/* Conteúdo */}
            <div className="flex flex-col flex-1 p-6 space-y-4">

                {/* Título e Links */}
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    <div className="flex gap-2">
                        {project.github_link && (
                            <a
                                href={project.github_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-secondary hover:text-white transition-colors"
                                aria-label="Ver Código"
                            >
                                <Github size={20} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Descrição Curta */}
                <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                    {project.short_description}
                </p>

                {/* Stack Tecnológica */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.tech_stack.slice(0, 3).map((tech) => (
                        <TechPill key={tech} name={tech} className="text-[10px] px-2 py-0.5" />
                    ))}
                    {project.tech_stack.length > 3 && (
                        <span className="text-xs text-text-secondary self-center">
                            +{project.tech_stack.length - 3}
                        </span>
                    )}
                </div>

                {/* Botão de Ação */}
                <Link
                    href={`/projetos/${project.slug}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline underline-offset-4"
                >
                    Ver Estudo de Caso <ArrowUpRight size={16} className="ml-1" />
                </Link>
            </div>
        </motion.div>
    );
}