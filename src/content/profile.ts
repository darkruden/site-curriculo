import { Profile } from "@/lib/schemas";

export const profileData: Profile = {
  headline: "Engenheiro de Software & AI Enthusiast | Focado em Java, Python e RAG",
  
  // O "Elevator Pitch" refinado:
  bio_short: "Estudante de Ciência da Computação na UFPI (25 anos) com foco em desenvolvimento Full Stack e Inteligência Artificial. Tenho experiência prática na construção de Chatbots e sistemas RAG (Retrieval-Augmented Generation). Movido por uma ambição extrema e pela promessa de excelência profissional, busco minha primeira oportunidade formal para aplicar minha proatividade em desafios de Engenharia de Software ou Data Science.",
  
  email: "bezerra35eduardo@gmail.com", // Coloque seu email real aqui
  social_links: {
    github: "https://github.com/darkruden",   // Coloque seu GitHub
    linkedin: "www.linkedin.com/in/eduardo-bezerra-450339206", // Coloque seu LinkedIn
  },
  
  career_milestones: [
    {
      date: "Futuro Breve",
      title: "Visão Empreendedora",
      description: "Meu objetivo de longo prazo é fundar uma startup tecnológica. Atualmente, busco absorver as melhores práticas do mercado e dominar infraestrutura (AWS/Oracle) para fundamentar esse sonho de criar soluções revolucionárias.",
    },
    {
      date: "2024 - Atual",
      title: "Foco em IA e Engenharia de Dados",
      description: "Desenvolvimento de TCC focado em RAG (Retrieval-Augmented Generation), integrando LLMs com bases de conhecimento proprietárias. Backend hospedado em Heroku e foco total em Python e Inteligência Artificial.",
    },
    {
      date: "2020 - 2023",
      title: "Formação Sólida (UFPI)",
      description: "Bacharelando em Ciência da Computação. Construí uma base algorítmica forte em Java e Python, além de desenvolvimento web moderno com React e TypeScript.",
    },
    {
      date: "O Ponto de Virada",
      title: "Compromisso com a Excelência",
      description: "Após um período de reflexão estratégica, defini meu propósito profissional: não apenas atuar na área, mas estar entre os melhores. Essa decisão transformou minha abordagem de aprendizado de passiva para extremamente proativa e orientada a resolução de problemas.",
    }
  ]
};