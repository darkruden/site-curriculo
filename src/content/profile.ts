import { Profile } from "@/lib/schemas";

export const profileData: Profile = {
  headline: "Engenheiro de Software focado em Performance e Escalabilidade",
  bio_short: "Com mais de 5 anos de experiência, transformo requisitos complexos em sistemas robustos. Minha abordagem combina rigor técnico com visão de produto, garantindo que cada linha de código entregue valor real ao negócio. Atualmente focado em arquiteturas serverless e otimização de performance (Core Web Vitals).",
  email: "seu.email@exemplo.com",
  social_links: {
    github: "https://github.com/seu-usuario",
    linkedin: "https://linkedin.com/in/seu-usuario",
    twitter: "https://twitter.com/seu-usuario",
  },
  career_milestones: [
    {
      date: "2024 - Atual",
      title: "Senior Full Stack Engineer",
      description: "Liderando a migração de monólitos para micro-serviços serverless, reduzindo custos de infraestrutura em 40%.",
    },
    {
      date: "2022 - 2023",
      title: "Engenheiro de Software Pleno",
      description: "Desenvolvimento de features críticas para o e-commerce principal, impactando 1M+ de usuários mensais. Implementei testes E2E que reduziram bugs em produção em 60%.",
    },
    {
      date: "2020 - 2021",
      title: "Frontend Developer",
      description: "Especialização em React e Next.js. Criei o Design System da empresa do zero, acelerando o desenvolvimento do time em 2x.",
    },
    {
      date: "2019",
      title: "O Início (Hello World)",
      description: "Início da jornada acadêmica em Ciência da Computação e primeiros projetos freelance entregues.",
    }
  ]
};