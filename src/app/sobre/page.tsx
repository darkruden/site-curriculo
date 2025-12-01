import { Metadata } from "next";
import { profileData } from "@/content/profile";
import { Timeline } from "@/components/sections/Timeline";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
    title: "Sobre Mim",
    description: profileData.bio_short,
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Header do Perfil */}
                <div className="flex flex-col md:flex-row gap-10 items-start mb-20">

                    {/* Avatar & Status */}
                    <div className="relative shrink-0 mx-auto md:mx-0">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-surface border-2 border-border overflow-hidden flex items-center justify-center text-4xl text-text-secondary select-none">
                            {/* Placeholder para foto - Troque <div /> por <Image /> depois */}
                            <span>IMG</span>
                        </div>

                        {/* Status Indicator */}
                        <div className="absolute bottom-2 right-2 flex h-6 w-6">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-6 w-6 bg-green-500 border-4 border-background"></span>
                        </div>
                    </div>

                    {/* Bio & Intro */}
                    <div className="space-y-6 text-center md:text-left flex-1">
                        <h1 className="text-4xl font-bold text-text-primary tracking-tight">
                            {profileData.headline}
                        </h1>
                        <p className="text-lg text-text-secondary leading-relaxed">
                            {profileData.bio_short}
                        </p>

                        {/* Links Sociais */}
                        <div className="flex justify-center md:justify-start gap-4">
                            <a href={profileData.social_links.github} target="_blank" className="p-2 rounded-lg bg-surface hover:bg-surface/80 hover:text-primary transition-colors border border-border">
                                <Github size={20} />
                            </a>
                            <a href={profileData.social_links.linkedin} target="_blank" className="p-2 rounded-lg bg-surface hover:bg-surface/80 hover:text-primary transition-colors border border-border">
                                <Linkedin size={20} />
                            </a>
                            <a href={`mailto:${profileData.email}`} className="p-2 rounded-lg bg-surface hover:bg-surface/80 hover:text-primary transition-colors border border-border">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* AI Hook Section (O Diferencial) */}
                <div className="mb-20 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 text-center md:text-left">
                        <h3 className="text-xl font-bold text-text-primary flex items-center justify-center md:justify-start gap-2">
                            <MessageSquare size={20} className="text-primary" />
                            Entreviste minha IA
                        </h3>
                        <p className="text-text-secondary text-sm max-w-md">
                            Quer saber detalhes específicos sobre minha experiência com AWS ou liderança? Pergunte ao meu assistente virtual.
                        </p>
                    </div>
                    <button className="whitespace-nowrap px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
                        Iniciar Chat (Em Breve)
                    </button>
                </div>

                {/* Timeline da Carreira */}
                <section>
                    <h2 className="text-2xl font-bold text-text-primary mb-8">Jornada Profissional</h2>
                    {profileData.career_milestones && (
                        <Timeline items={profileData.career_milestones} />
                    )}
                </section>

            </div>
        </div>
    );
}