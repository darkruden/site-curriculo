"use client";

import { useState, useRef, useEffect } from "react";
// [CORREÇÃO] Importamos o hook do pacote novo E o tipo Message do pacote core
import { useChat } from "@ai-sdk/react";
import { type Message } from "ai";

import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
// Removemos a importação do Button que estava dando erro de caminho e usaremos HTML padrão por enquanto
import { cn } from "@/lib/utils";

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    // O hook useChat gerencia todo o estado do chat
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        api: "/api/chat",
    });

    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

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

                            {/* [CORREÇÃO] Tipamos 'm' como 'Message' para o TypeScript reconhecer 'content' e 'role' */}
                            {messages.map((m: Message) => (
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
                                        {m.content}
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex gap-2 text-text-secondary text-xs ml-10">
                                    Digitando...
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-3 border-t border-border bg-surface/50">
                            <div className="flex gap-2">
                                <input
                                    value={input}
                                    onChange={handleInputChange}
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
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-white shadow-lg hover:shadow-primary/25 transition-shadow"
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </motion.button>
        </div>
    );
}