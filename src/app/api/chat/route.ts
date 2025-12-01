import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { profileData } from "@/content/profile";
import { skillsData } from "@/content/skills";
import { projectsData } from "@/content/projects";

// [CORREÇÃO 1] Removemos 'runtime = edge' para evitar problemas locais no Windows
// export const runtime = "edge"; 

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    console.log("🤖 Recebi mensagem:", messages[messages.length - 1].content);

    const context = `
      VOCÊ É UM ASSISTENTE VIRTUAL DO PORTFÓLIO DE UM ENGENHEIRO DE SOFTWARE.
      
      DADOS:
      - Perfil: ${JSON.stringify(profileData)}
      - Habilidades: ${JSON.stringify(skillsData)}
      - Projetos: ${JSON.stringify(projectsData.map(p => ({ title: p.title, desc: p.short_description, result: p.result_quantified })))}

      DIRETRIZES:
      1. Responda em primeira pessoa.
      2. Seja breve e profissional.
      3. Fale em Português do Brasil.
    `;

    const result = streamText({
      model: google("models/gemini-2.5-flash"),
      system: context,
      messages,
    });

    return result.toTextStreamResponse();
    
  } catch (error) {
    console.error("❌ Erro no Backend:", error);
    return new Response(JSON.stringify({ error: "Erro interno na IA" }), { status: 500 });
  }
}