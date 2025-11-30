import { z } from 'zod';

// Schema para os Projetos (Frontmatter do MDX)
// Garante que todo projeto tenha os campos estratégicos para o recrutador
export const ProjectSchema = z.object({
  slug: z.string().describe("Identificador único para URL (ex: sistema-gestao)"),
  title: z.string().min(2, "Título muito curto"),
  
  // O "Elevator Pitch" do card
  short_description: z.string().max(160, "Mantenha a descrição curta para SEO e Cards"),
  
  // Stack Tecnológico (Mínimo 1 tecnologia para não quebrar o layout)
  tech_stack: z.array(z.string()).min(1, "Liste pelo menos uma tecnologia"),
  
  // A Narrativa de Engenharia (Campos obrigatórios do Estudo de Caso)
  problem: z.string().describe("Qual era a dor do negócio?"),
  solution: z.string().describe("Qual foi a abordagem técnica?"),
  result_quantified: z.string().describe("KPI de impacto (ex: -40% Latência)"),
  
  // Links de Prova
  github_link: z.string().url("Link do GitHub inválido").describe("URL para o repositório ou deep link"),
  live_demo_link: z.string().url().optional().describe("Link para produção (opcional)"),
  
  // Controle de Exibição
  featured: z.boolean().default(false).describe("Se true, aparece no topo da Home"),
  date: z.string().date().optional().describe("Data para ordenação (YYYY-MM-DD)"),
});

// Inferência do Tipo TypeScript a partir do Schema (Automático)
export type Project = z.infer<typeof ProjectSchema>;

// Schema para a Skills Matrix (Definido no JSON)
export const SkillCategorySchema = z.object({
  category: z.string(), // Ex: "Linguagens", "DevOps"
  items: z.array(z.string()), // Ex: ["TypeScript", "Rust", "Go"]
});

export type SkillCategory = z.infer<typeof SkillCategorySchema>;

// Schema para o Perfil/Sobre Mim
export const ProfileSchema = z.object({
  headline: z.string(), // "Engenheiro de Software focado em Performance"
  bio_short: z.string(),
  email: z.string().email(),
  social_links: z.object({
    github: z.string().url(),
    linkedin: z.string().url(),
    twitter: z.string().url().optional(),
  }),
  career_milestones: z.array(z.object({
    date: z.string(),
    title: z.string(),
    description: z.string(),
  })).optional(),
});

export type Profile = z.infer<typeof ProfileSchema>;