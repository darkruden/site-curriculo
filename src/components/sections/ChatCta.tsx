"use client"; // Este arquivo pode usar hooks e onClick

import { useChatControl } from "@/lib/chat-context";
import { MessageSquare } from "lucide-react";

export function ChatCta() {
    const { setIsOpen } = useChatControl();

    return (
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
            <button
                onClick={() => setIsOpen(true)}
                className="whitespace-nowrap px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
            >
                Iniciar Chat Agora
            </button>
        </div>
    );
}