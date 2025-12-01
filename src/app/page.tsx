import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Seção 1: A Primeira Impressão */}
      <Hero />

      {/* Futuro: <SkillsMatrix /> */}
      {/* Futuro: <FeaturedProjects /> */}
    </div>
  );
}