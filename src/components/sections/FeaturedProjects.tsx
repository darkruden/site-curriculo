import { ProjectCard } from "@/components/project/ProjectCard";
import { projectsData } from "@/content/projects";

export function FeaturedProjects() {
    // Filtra apenas os projetos marcados como "featured"
    const featuredProjects = projectsData.filter(p => p.featured);

    return (
        <section className="py-24 px-4 container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight text-text-primary">
                        Projetos Selecionados
                    </h2>
                    <p className="text-text-secondary max-w-xl">
                        Casos reais onde apliquei engenharia de software para resolver problemas de negócio complexos.
                    </p>
                </div>
                {/* Link para ver todos (futuro) */}
                <button className="text-sm font-medium text-text-secondary hover:text-primary transition-colors">
                    Ver todos os projetos →
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProjects.map((project, index) => (
                    <ProjectCard key={project.slug} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}