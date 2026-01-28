import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formata uma data ISO (YYYY-MM-DD) para formato brasileiro (DD/MM/YYYY)
 * Sem usar Date() para evitar problemas de fuso horário
 */
export function formatEpisodeDate(dateStr: string): string {
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
}

/**
 * Extrai o ano de uma data ISO (YYYY-MM-DD) como número
 */
export function getYearFromDate(dateStr: string): number {
  return parseInt(dateStr.split("-")[0], 10);
}

/**
 * Compara duas datas ISO para ordenação (mais recente primeiro)
 */
export function compareDatesDesc(a: string, b: string): number {
  return b.localeCompare(a);
}
