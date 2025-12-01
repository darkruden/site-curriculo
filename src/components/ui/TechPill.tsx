import { cn } from "@/lib/utils";

interface TechPillProps {
    name: string;
    featured?: boolean; // Se true, ganha um destaque extra (cor primária)
    className?: string;
}

export function TechPill({ name, featured = false, className }: TechPillProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 hover:scale-105 select-none",
                // Estilo Padrão (Cinza sutil)
                !featured && "bg-surface border-border text-text-secondary hover:border-primary/50 hover:text-text-primary",
                // Estilo Destaque (Brilho da cor primária)
                featured && "bg-primary/10 border-primary/20 text-primary shadow-[0_0_10px_rgba(139,92,246,0.1)]",
                className
            )}
        >
            {name}
        </span>
    );
}