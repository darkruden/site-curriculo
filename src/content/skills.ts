import { SkillCategory } from "@/lib/schemas";

export const skillsData: SkillCategory[] = [
  {
    category: "Linguagens & Core",
    items: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Python",
      "HTML5/CSS3",
      "SQL"
    ],
  },
  {
    category: "Frontend & Frameworks",
    items: [
      "Next.js 14/15",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Zod",
      "React Query"
    ],
  },
  {
    category: "Backend & Cloud",
    items: [
      "Node.js",
      "Serverless (Edge Functions)",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
      "Vercel"
    ],
  },
  {
    category: "Ferramentas & DevOps",
    items: [
      "Git & GitHub",
      "CI/CD (Actions)",
      "Jest/Vitest",
      "Playwright",
      "Figma",
      "VS Code"
    ],
  },
];