import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // Permite alternar temas manualmente se necessário
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta baseada no Arquivo 4 (Slate & Violet)
        background: "#020617", // Slate-950 (Fundo Profundo)
        surface: "#0f172a",    // Slate-900 (Cards e Paineis)
        border: "#1e293b",     // Slate-800 (Bordas sutis)
        
        // Cores de Ação
        primary: "#8b5cf6",    // Violet-500 (Foco em IA/Modernidade)
        secondary: "#10b981",  // Emerald-500 (Foco em Performance/Sucesso)
        
        // Texto
        "text-primary": "#f8fafc",   // Slate-50 (Quase branco)
        "text-secondary": "#94a3b8", // Slate-400 (Cinza médio para descrições)
      },
      fontFamily: {
        // Vamos configurar essas variáveis no layout.tsx depois
        sans: ["var(--font-sans)"], 
        mono: ["var(--font-mono)"], 
      },
      // Animação para o anel de status (Arquivo 7)
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;