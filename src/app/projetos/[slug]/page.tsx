import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Calendar, Layers } from "lucide-react";
import { projectsData } from "@/content/projects";
import { TechPill } from "@/components/ui/TechPill";
import { cn } from "@/lib/utils";

interface PageProps {
    params: Promise<{ slug: string }>;
}

// 1. Gerar params estáticos para SSG (Performance Máxima)
// Isso faz com que as páginas sejam geradas no build, e não na requisição.
export async function generateStaticParams() {
    return projectsData.map((project) => ({
        slug: project.slug,
    }));
}

// 2. SEO Dinâmico (Arquivo 5)
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) return {};

    return {
        title: project.title,
        description: project.short_description,
        openGraph: {
            title: project.title,
            description: project.short_description,
            // images: [`/api/og?title=${project.title}`], // Futuro: OG Image dinâmica
        },
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projectsData.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-background pb-20">
            {/* Header com KPI (O Gancho) */}
            <header className="relative pt-32 pb-16 px-4 border-b border-border/40 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 -z-10" />

                <div className="container mx-auto max-w-4xl space-y-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors mb-4"
                    >
                        <ArrowLeft size={16} /> Voltar para Home
                    </Link>

                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.featured && (
                                <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/20 text-primary border border-primary/20">
                                    Projeto Destaque
                                </span>
                            )}
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-surface text-text-secondary border border-border flex items-center gap-2">
                                <Calendar size={12} /> {project.date || "2024"}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-text-primary tracking-tight">
                            {project.title}
                        </h1>

                        <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
                            {project.short_description}
                        </p>
                    </div>

                    {/* Links de Ação */}
                    <div className="flex flex-wrap gap-4 pt-4">
                        {project.live_demo_link && (
                            <a
                                href={project.live_demo_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                            >
                                Ver Demo Online <ExternalLink size={18} />
                            </a>
                        )}
                        <a
                            href={project.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-surface border border-border text-text-primary hover:bg-surface/80 transition-all"
                        >
                            Código Fonte <Github size={18} />
                        </a>
                    </div>
                </div>
            </header>

            <main className="container mx-auto max-w-3xl px-4 py-16 space-y-20">

                {/* KPI Section (O Resultado) */}
                <section className="bg-surface/50 border border-border rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-1">
                            Impacto Principal
                        </h3>
                        <p className="text-3xl font-bold text-secondary">
                            {project.result_quantified}
                        </p>
                    </div>
                    <div className="h-px w-full md:h-12 md:w-px bg-border" />
                    <div className="flex flex-wrap gap-2 justify-center md:justify-end max-w-md">
                        {project.tech_stack.map((tech) => (
                            <TechPill key={tech} name={tech} />
                        ))}
                    </div>
                </section>

                {/* Narrative: The Problem */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 text-2xl font-bold text-text-primary">
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-red-500/10 text-red-500 text-sm">1</span>
                        <h2>O Desafio (The Problem)</h2>
                    </div>
                    <div className="prose prose-invert prose-lg text-text-secondary leading-relaxed">
                        <p>{project.problem}</p>
                    </div>
                </section>

                {/* Narrative: The Solution */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 text-2xl font-bold text-text-primary">
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-500/10 text-green-500 text-sm">2</span>
                        <h2>A Solução (The Solution)</h2>
                    </div>
                    <div className="prose prose-invert prose-lg text-text-secondary leading-relaxed">
                        <p>{project.solution}</p>
                    </div>

                    {/* Architecture Placeholder (Diagrama) */}
                    <div className="my-8 p-8 border border-dashed border-border rounded-xl bg-surface/30 flex flex-col items-center justify-center text-center gap-4">
                        <div className="p-4 rounded-full bg-surface border border-border">
                            <Layers className="w-8 h-8 text-text-secondary" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-text-primary">Diagrama de Arquitetura</p>
                            <p className="text-xs text-text-secondary">
                                (Adicione uma imagem aqui: <code>/public/diagrams/{project.slug}.png</code>)
                            </p>
                        </div>
                    </div>
                </section>

                {/* Deep Dive (Curadoria de Código) */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-text-primary">Deep Dive Técnico</h2>
                    <p className="text-text-secondary">
                        Em vez de navegar por milhares de arquivos, veja os pontos cruciais onde a engenharia acontece:
                    </p>

                    <div className="grid gap-4">
                        {/* Exemplo de Deep Link Manual (No futuro virá do MDX) */}
                        <a
                            href={`${project.github_link}`}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-center justify-between p-4 rounded-lg border border-border bg-surface hover:border-primary/50 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <Github size={20} className="text-text-secondary" />
                                <div className="flex flex-col">
                                    <span className="text-sm font-mono text-primary font-medium group-hover:underline decoration-primary/50 underline-offset-4">
                                        src/core/engine.ts
                                    </span>
                                    <span className="text-xs text-text-secondary">Lógica principal do algoritmo</span>
                                </div>
                            </div>
                            <ExternalLink size={16} className="text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </section>

            </main>
        </article>
    );
}