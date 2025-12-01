import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

// Define as propriedades que o botão aceita (além das padrão do HTML)
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    // Estilos Base (Sempre aplicados)
                    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",

                    // Variantes de Cor
                    variant === "primary" && "bg-primary text-white hover:bg-primary/90 shadow-sm",
                    variant === "secondary" && "bg-surface text-text-primary border border-border hover:bg-slate-800",
                    variant === "outline" && "border border-border bg-transparent hover:bg-surface text-text-primary",
                    variant === "ghost" && "hover:bg-surface hover:text-text-primary text-text-secondary",

                    // Variantes de Tamanho
                    size === "sm" && "h-8 px-3 text-xs",
                    size === "md" && "h-10 px-4 py-2 text-sm",
                    size === "lg" && "h-12 px-8 text-base",

                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };