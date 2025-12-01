"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { cn } from "@/lib/utils";
import { useChatControl } from "@/lib/chat-context"; // [IMPORTANTE: Importar o contexto]

const navLinks = [
    { name: "Projetos", href: "/projetos" },
    { name: "Sobre", href: "/sobre" },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Renomeei para evitar confusão
    const pathname = usePathname();

    // [IMPORTANTE] Pegamos a função de abrir o chat do contexto
    // Renomeamos para 'openChat' para ficar claro
    const { setIsOpen: openChat } = useChatControl();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo / Brand */}
                <Link
                    href="/"
                    className="flex items-center gap-2 font-mono text-lg font-bold text-primary hover:opacity-80 transition-opacity"
                >
                    <Terminal size={20} />
                    <span>Eduardo Bezerra</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === link.href ? "text-primary" : "text-text-secondary"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="h-4 w-px bg-border mx-2" />

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/darkruden" // Lembre de por seus links reais aqui depois
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-white transition-colors"
                        >
                            <GithubIcon size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/eduardo-bezerra-450339206/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-secondary hover:text-white transition-colors"
                        >
                            <LinkedinIcon size={20} />
                        </a>
                    </div>

                    {/* [CORREÇÃO] Botão ASK AI agora funciona */}
                    <button
                        onClick={() => openChat(true)}
                        className="bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-primary/20 transition-colors border border-primary/20 cursor-pointer"
                    >
                        Ask AI
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-text-secondary hover:text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-16 left-0 right-0 bg-background border-b border-border p-4 md:hidden shadow-2xl"
                    >
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-base font-medium text-text-secondary hover:text-primary py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="border-border" />
                            {/* Botão Mobile ASK AI */}
                            <button
                                onClick={() => {
                                    openChat(true);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="text-left text-base font-bold text-primary py-2"
                            >
                                ASK AI
                            </button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}