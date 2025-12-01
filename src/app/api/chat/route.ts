import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { profileData } from "@/content/profile";
import { skillsData } from "@/content/skills";
import { projectsData } from "@/content/projects";

// Configuração para rodar na Edge (Latência Mínima)
export const runtime = "edge";

export async function POST(req: Request) {
  const { messages } = await req.json();

  // 1. Preparar o contexto (RAG simplificado)
  // Transformamos seus dados em texto para a IA ler.
  const context = `
    VOCÊ É UM ASSISTENTE VIRTUAL DO PORTFÓLIO DE UM ENGENHEIRO DE SOFTWARE.
    
    SEUS DADOS DE CONTEXTO (CURRÍCULO):
    - Perfil: ${JSON.stringify(profileData)}
    - Habilidades: ${JSON.stringify(skillsData)}
    - Projetos: ${JSON.stringify(projectsData.map(p => ({ title: p.title, desc: p.short_description, tech: p.tech_stack, result: p.result_quantified })))}

    DIRETRIZES DE RESPOSTA:
    1. Responda sempre em primeira pessoa (como se fosse o dono do portfólio) ou como "o assistente dele".
    2. Seja breve, profissional e direto. Evite textos longos.
    3. Se perguntarem algo que não está nos dados, diga educadamente que não tem essa informação e sugira entrar em contato pelo LinkedIn ou Email.
    4. Tente sempre direcionar o usuário para ver os projetos ("Veja o projeto X...").
    5. Fale em Português do Brasil por padrão, mas responda em inglês se perguntarem em inglês.
  `;

  // 2. Chamar o Google Gemini
  const result = streamText({
    model: google("gemini-1.5-flash"), // Modelo rápido e eficiente
    system: context, // Injetamos o "quem sou eu" aqui
    messages,
  });

  // 3. Devolver a resposta em stream (digitação em tempo real)
  return result.toTextStreamResponse();
}