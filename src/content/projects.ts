import { Project } from "@/lib/schemas";

export const projectsData: Project[] = [
  {
    slug: "sistema-gestao-estoque",
    title: "SaaS de Gestão Inteligente",
    short_description: "Plataforma de alta performance para gestão de estoque com previsão de demanda baseada em IA.",
    tech_stack: ["Next.js", "PostgreSQL", "AWS Lambda", "OpenAI API"],
    problem: "Clientes perdiam 20% de vendas por falta de estoque em horários de pico.",
    solution: "Implementei um algoritmo de previsão de demanda usando séries temporais e IA.",
    result_quantified: "🚀 -20% Ruptura de Estoque", // O KPI de impacto
    github_link: "https://github.com",
    live_demo_link: "https://vercel.com",
    featured: true,
  },
  {
    slug: "api-gateway-high-scale",
    title: "API Gateway Distribuído",
    short_description: "Infraestrutura serverless capaz de processar 10k requisições por segundo com baixa latência.",
    tech_stack: ["Go", "Redis", "Docker", "Kubernetes"],
    problem: "O gateway antigo travava durante a Black Friday.",
    solution: "Reescrita completa em Go utilizando goroutines para concorrência massiva.",
    result_quantified: "⚡ 10k Req/s Estável",
    github_link: "https://github.com",
    featured: true,
  }
];