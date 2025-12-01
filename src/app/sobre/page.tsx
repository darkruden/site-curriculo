import { Metadata } from "next";
import { profileData } from "@/content/profile";
import { Timeline } from "@/components/sections/Timeline";
import { ChatCta } from "@/components/sections/ChatCta"; // [NOVO IMPORT]
import { Github, Linkedin, Mail, Phone } from "lucide-react";


// Agora o Metadata funciona porque este é um Server Component
export const metadata: Metadata = {
    title: "Sobre Mim",
    description: profileData.bio_short,
};

export default function AboutPage() {
    // Removemos o useChatControl daqui

    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Header do Perfil */}
                <div className="flex flex-col md:flex-row gap-10 items-start mb-20">
                    {/* Avatar & Status */}
                    <div className="relative shrink-0 mx-auto md:mx-0">
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-surface border-2 border-border overflow-hidden flex items-center justify-center text-4xl text-text-secondary select-none">
                            <span>IMG</span>
                        </div>
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

                            {/* [ADIÇÃO] Botão do WhatsApp */}
                            {profileData.social_links.whatsapp && (
                                <a
                                    href={profileData.social_links.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-lg bg-surface hover:bg-surface/80 hover:text-green-500 transition-colors border border-border"
                                    title="Chamar no WhatsApp"
                                >
                                    <Phone size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* AI Hook Section (Isolado no Client Component) */}
                <ChatCta />

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