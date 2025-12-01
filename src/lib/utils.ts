import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Função helper para combinar classes do Tailwind sem conflitos
// Exemplo de uso: cn("bg-red-500", isSelected && "bg-green-500")
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}