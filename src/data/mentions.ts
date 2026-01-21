// Product Arena Radar - Static Data
// Real podcast data from Papo na Arena

export interface Episode {
  id: number;
  title: string;
  date: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  url?: string;
}

export interface Person {
  id: string;
  name: string;
}

export interface Mention {
  id: string;
  episodeId: number;
  personId: string;
  productId: string;
  context?: string;
}

// Episodes
export const episodes: Episode[] = [
  {
    id: 101,
    title: "Episode 101 - As previsões 2026 que ninguém pediu sobre Produto, AI e mercado tech",
    date: "2026-01-14",
    description: "Previsões ousadas sobre produto, IA e o mercado tech para 2026.",
  },
  {
    id: 102,
    title: "Episode 102 - Coming Soon",
    date: "2026-01-21",
    description: "Próximo episódio em breve.",
  },
];

// Products (unique across all episodes)
export const products: Product[] = [
  { id: "bolt", name: "Bolt", category: "AI Tools" },
  { id: "lovable", name: "Lovable", category: "AI Tools" },
  { id: "wisprflow", name: "WisprFlow", category: "AI Tools" },
  { id: "make", name: "Make", category: "Automation" },
  { id: "n8n", name: "N8N", category: "Automation" },
  { id: "agua", name: "Água", category: "Lifestyle" },
  { id: "strava", name: "Strava", category: "Fitness" },
  { id: "gemini", name: "Gemini", category: "AI Tools" },
  { id: "99", name: "99", category: "Transportation" },
  { id: "amplitude", name: "Amplitude", category: "Analytics" },
  { id: "airbnb", name: "Airbnb", category: "Travel" },
  { id: "twitter", name: "Twitter", category: "Social" },
  { id: "loom", name: "Loom", category: "Productivity" },
  { id: "vocabulary", name: "Vocabulary", category: "Education" },
];

// People (contributors/hosts)
export const people: Person[] = [
  { id: "daniel-gonzalez", name: "Daniel Gonzalez" },
  { id: "thiago-simao", name: "Thiago Simão" },
  { id: "iona-oliveira", name: "Ionã Oliveira" },
  { id: "walmir", name: "Walmir" },
  { id: "ronald-falcao", name: "Ronald Falcão" },
  { id: "wilson-moraes", name: "Wilson Moraes" },
  { id: "portinho", name: "Portinho" },
  { id: "vanessa", name: "Vanessa" },
  { id: "novellino", name: "Novellino" },
  { id: "glauco", name: "Glauco" },
  { id: "lucao", name: "Lucão" },
  { id: "matt-lopes", name: "Matt Lopes" },
  { id: "andrezao", name: "Andrezão" },
];

// Mentions
export const mentions: Mention[] = [
  // Episode 101
  { id: "m1", episodeId: 101, personId: "daniel-gonzalez", productId: "bolt" },
  { id: "m2", episodeId: 101, personId: "thiago-simao", productId: "lovable" },
  { id: "m3", episodeId: 101, personId: "iona-oliveira", productId: "wisprflow", context: "Uso para interação com Claude Code" },
  { id: "m4", episodeId: 101, personId: "walmir", productId: "make" },
  { id: "m5", episodeId: 101, personId: "ronald-falcao", productId: "n8n" },
  { id: "m6", episodeId: 101, personId: "ronald-falcao", productId: "agua", context: "Calor intenso" },
  { id: "m7", episodeId: 101, personId: "wilson-moraes", productId: "strava", context: "Atenção ao Quitter's Day em 19 de janeiro" },
  { id: "m8", episodeId: 101, personId: "portinho", productId: "gemini", context: "Cancelou assinatura ChatGPT" },
  { id: "m9", episodeId: 101, personId: "vanessa", productId: "99", context: "Novo código de segurança ao chegar no carro" },
  { id: "m10", episodeId: 101, personId: "novellino", productId: "amplitude" },
  { id: "m11", episodeId: 101, personId: "glauco", productId: "airbnb" },
  { id: "m12", episodeId: 101, personId: "lucao", productId: "twitter" },
  { id: "m13", episodeId: 101, personId: "matt-lopes", productId: "loom" },
  { id: "m14", episodeId: 101, personId: "andrezao", productId: "vocabulary" },
];

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getPersonById(id: string): Person | undefined {
  return people.find((p) => p.id === id);
}

export function getEpisodeById(id: number): Episode | undefined {
  return episodes.find((e) => e.id === id);
}

export function getMentionsByProduct(productId: string): Mention[] {
  return mentions.filter((m) => m.productId === productId);
}

export function getMentionsByPerson(personId: string): Mention[] {
  return mentions.filter((m) => m.personId === personId);
}

export function getMentionsByEpisode(episodeId: number): Mention[] {
  return mentions.filter((m) => m.episodeId === episodeId);
}

export function getProductMentionCount(productId: string): number {
  return mentions.filter((m) => m.productId === productId).length;
}

export function getPersonMentionCount(personId: string): number {
  return mentions.filter((m) => m.personId === personId).length;
}

export function getTopProducts(limit: number = 10): { product: Product; count: number }[] {
  const counts = new Map<string, number>();
  mentions.forEach((m) => {
    counts.set(m.productId, (counts.get(m.productId) || 0) + 1);
  });

  return Array.from(counts.entries())
    .map(([productId, count]) => ({
      product: getProductById(productId)!,
      count,
    }))
    .filter((item) => item.product)
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

export function getProductMentionsByEpisode(productId: string): { episodeId: number; count: number }[] {
  const counts = new Map<number, number>();
  mentions
    .filter((m) => m.productId === productId)
    .forEach((m) => {
      counts.set(m.episodeId, (counts.get(m.episodeId) || 0) + 1);
    });

  return Array.from(counts.entries())
    .map(([episodeId, count]) => ({ episodeId, count }))
    .sort((a, b) => a.episodeId - b.episodeId);
}

export function getPersonTopProducts(personId: string, limit: number = 10): { product: Product; count: number }[] {
  const counts = new Map<string, number>();
  mentions
    .filter((m) => m.personId === personId)
    .forEach((m) => {
      counts.set(m.productId, (counts.get(m.productId) || 0) + 1);
    });

  return Array.from(counts.entries())
    .map(([productId, count]) => ({
      product: getProductById(productId)!,
      count,
    }))
    .filter((item) => item.product)
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

export function getCategories(): string[] {
  return [...new Set(products.map((p) => p.category))];
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
