"use client";

import { useState, useRef, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { useChatControl } from "@/lib/chat-context";

// Interface manual
interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
}

export function ChatWidget() {
    const { isOpen, toggleChat, setIsOpen } = useChatControl();

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }, [messages, isOpen]);

    const handleSendMessage = async (e: FormEvent) => {
        e.preventDefault();

        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input,
        };

        // 1. Adiciona mensagem do usuário e limpa input
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, userMessage],
                }),
            });

            if (!response.ok) throw new Error("Erro na conexão com a API");

            // 2. Cria o balão vazio da IA
            const aiMessageId = (Date.now() + 1).toString();
            setMessages((prev) => [
                ...prev,
                { id: aiMessageId, role: "assistant", content: "" },
            ]);

            if (!response.body) return;

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });

                // [CORREÇÃO CRÍTICA] Atualização Imutável (Cria novo objeto)
                setMessages((prev) =>
                    prev.map((msg) => {
                        if (msg.id === aiMessageId) {
                            // Retornamos um NOVO objeto com o conteúdo atualizado
                            return { ...msg, content: msg.content + chunk };
                        }
                        return msg;
                    })
                );
            }

        } catch (error) {
            console.error("Erro no frontend:", error);
            setMessages((prev) => [
                ...prev,
                { id: "error", role: "assistant", content: "Desculpe, não consegui processar sua resposta agora." },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[350px] h-[500px] bg-surface border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 bg-surface border-b border-border flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="font-semibold text-text-primary">IA Assistant</span>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-text-secondary hover:text-text-primary"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Mensagens */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.length === 0 && (
                                <div className="text-center text-text-secondary text-sm mt-8">
                                    <Bot size={32} className="mx-auto mb-2 opacity-50" />
                                    <p>Olá! Sou a IA deste portfólio.</p>
                                    <p>Pergunte sobre meus projetos, skills ou experiência.</p>
                                </div>
                            )}

                            {messages.map((m) => (
                                <div
                                    key={m.id}
                                    className={cn(
                                        "flex gap-3 text-sm",
                                        m.role === "user" ? "flex-row-reverse" : "flex-row"
                                    )}
                                >
                                    <div className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                                        m.role === "user" ? "bg-primary/20 text-primary" : "bg-surface border border-border text-text-secondary"
                                    )}>
                                        {m.role === "user" ? <User size={14} /> : <Bot size={14} />}
                                    </div>
                                    <div className={cn(
                                        "p-3 rounded-lg max-w-[80%]",
                                        m.role === "user"
                                            ? "bg-primary text-white"
                                            : "bg-surface border border-border text-text-secondary"
                                    )}>
                                        {/* Renderização do Conteúdo */}
                                        {m.content}
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex gap-2 text-text-secondary text-xs ml-10">
                                    <span className="animate-pulse">Digitando...</span>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Manual */}
                        <form onSubmit={handleSendMessage} className="p-3 border-t border-border bg-surface/50">
                            <div className="flex gap-2">
                                <input
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Pergunte algo..."
                                    className="flex-1 bg-background border border-border rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary/50 text-text-primary placeholder:text-text-secondary/50"
                                />
                                <button
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="p-2 bg-primary text-white rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleChat}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:shadow-primary/25 transition-shadow"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>
        </div>
    );
}