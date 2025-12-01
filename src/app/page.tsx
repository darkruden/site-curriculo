import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills"; // [ADIÇÃO]
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedProjects /> {/* [ADIÇÃO] - Colocamos Projetos ANTES de Skills para prioridade */}
      <Skills />
    </div>
  );
}
