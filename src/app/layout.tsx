import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/sections/Navbar";
import { ChatWidget } from "@/components/chat/ChatWidget";
// Configuração da fonte Inter (Texto Principal)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans", // Nome da variável CSS que o Tailwind vai ler
  display: "swap",
});

// Configuração da fonte JetBrains Mono (Código e Detalhes Técnicos)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Metadados Base (SEO Inicial) - Arquivo 5
export const metadata: Metadata = {
  title: {
    template: "%s | Seu Nome",
    default: "Seu Nome | Engenheiro de Software", // Título padrão
  },
  description: "Portfólio de engenharia focado em performance e inteligência artificial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background text-text-primary antialiased selection:bg-primary/30 selection:text-primary-foreground">

        {/* [ADIÇÃO] Navbar fixa no topo */}
        <Navbar />

        {/* Adicionei 'pt-16' para compensar a altura da Navbar fixa e o conteúdo não ficar escondido */}
        <main className="min-h-screen flex flex-col pt-16">
          {children}
        </main>
        <ChatWidget />

      </body>
    </html>
  );
}

