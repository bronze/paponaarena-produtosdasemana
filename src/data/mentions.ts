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
    title: "Episode 102 - Claude Code: acabou pro ChatGPT?",
    date: "2026-01-21",
    description: "Discussão sobre Claude Code e o futuro das ferramentas de IA.",
  },
];

// Products (unique across all episodes)
export const products: Product[] = [
  { id: "bolt", name: "Bolt", category: "AI Tools", url: "https://bolt.new" },
  { id: "lovable", name: "Lovable", category: "AI Tools", url: "https://lovable.dev" },
  { id: "wisprflow", name: "WisprFlow", category: "AI Tools", url: "https://wisprflow.ai" },
  { id: "make", name: "Make", category: "Automation", url: "https://make.com" },
  { id: "n8n", name: "N8N", category: "Automation", url: "https://n8n.io" },
  { id: "agua", name: "Água", category: "Lifestyle" },
  { id: "strava", name: "Strava", category: "Fitness", url: "https://strava.com" },
  { id: "gemini", name: "Gemini", category: "AI Tools", url: "https://gemini.google.com" },
  { id: "99", name: "99", category: "Transportation", url: "https://99app.com" },
  { id: "amplitude", name: "Amplitude", category: "Analytics", url: "https://amplitude.com" },
  { id: "airbnb", name: "Airbnb", category: "Travel", url: "https://airbnb.com" },
  { id: "twitter", name: "Twitter", category: "Social", url: "https://x.com" },
  { id: "loom", name: "Loom", category: "Productivity", url: "https://loom.com" },
  { id: "vocabulary", name: "Vocabulary", category: "Education", url: "https://vocabulary.com" },
  // Episode 102 products
  { id: "replit", name: "Replit", category: "AI Tools", url: "https://replit.com" },
  { id: "hevy", name: "Hevy", category: "Fitness", url: "https://hevyapp.com" },
  { id: "gymrats", name: "GymRats", category: "Fitness", url: "https://gymratsapp.com" },
  { id: "bike-spinning", name: "Bike de Spinning", category: "Fitness" },
  { id: "notebooklm", name: "NotebookLM", category: "AI Tools", url: "https://notebooklm.google.com" },
  { id: "google-docs", name: "Google Docs", category: "Productivity", url: "https://docs.google.com" },
  { id: "google-ai-studio", name: "Google AI Studio", category: "AI Tools", url: "https://aistudio.google.com" },
  { id: "antigravity", name: "Antigravity", category: "Fitness" },
  { id: "youtube", name: "Youtube", category: "Entertainment", url: "https://youtube.com" },
  { id: "cursor", name: "Cursor", category: "AI Tools", url: "https://cursor.com" },
  { id: "elevenlabs", name: "ElevenLabs", category: "AI Tools", url: "https://elevenlabs.io" },
  { id: "chatgpt", name: "ChatGPT", category: "AI Tools", url: "https://chat.openai.com" },
  { id: "notion-ai", name: "Notion AI", category: "Productivity", url: "https://notion.so" },
  { id: "opal", name: "Opal", category: "Wellness", url: "https://opal.so" },
  { id: "claude-code", name: "Claude Code", category: "AI Tools", url: "https://claude.ai" },
  { id: "databricks", name: "Databricks", category: "Data", url: "https://databricks.com" },
  { id: "teams", name: "Teams", category: "Productivity", url: "https://teams.microsoft.com" },
  { id: "huxe", name: "Huxe", category: "AI Tools" },
  { id: "ze-delivery", name: "Zé Delivery", category: "Delivery", url: "https://zedelivery.com.br" },
  { id: "kindle", name: "Kindle", category: "Reading", url: "https://amazon.com/kindle" },
  { id: "caderno", name: "Caderno", category: "Lifestyle" },
  { id: "duolingo", name: "Duolingo", category: "Education", url: "https://duolingo.com" },
  { id: "ipod-fake", name: "iPod Fake Classic", category: "Lifestyle" },
  { id: "camisa-preta", name: "Camisa Preta Básica", category: "Lifestyle" },
  { id: "art-science-engineering", name: "The Art of Doing Science and Engineering: Learning to Learn", category: "Education", url: "https://substack.com/redirect/d44ff958-d2d1-476e-b90e-720a653353bc?j=eyJ1IjoiM2Z4N2xsIn0.hprP9-m3wJcmtKuXGObKSXN8QwqEhdmH1uzVY49NegA" },
  { id: "spa-inflavel-intex", name: "Spa Inflável 795L 120 Jatos PureSpa Bubbles Intex", category: "Lifestyle", url: "https://substack.com/redirect/4e097965-e146-4a63-b675-520b7728263f?j=eyJ1IjoiM2Z4N2xsIn0.hprP9-m3wJcmtKuXGObKSXN8QwqEhdmH1uzVY49NegA" },
];

// People (contributors/hosts)
export const people: Person[] = [
  // Episode 101
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
  // Episode 102
  { id: "arthur", name: "Arthur" },
  { id: "aiquis", name: "Aíquis" },
  { id: "beatriz-morales", name: "Beatriz Morales" },
  { id: "patricia-zago", name: "Patrícia Zago" },
  { id: "tadeu", name: "Tadeu" },
  { id: "juliana-lisboa", name: "Juliana Lisboa" },
  { id: "alexandre-pereira", name: "Alexandre Pereira" },
  { id: "beatriz-fazolo", name: "Beatriz Fazolo" },
  { id: "soraya", name: "Soraya" },
  { id: "danilo-penteado", name: "Danilo Penteado" },
  { id: "cassi-vilvert", name: "Cassi Vilvert" },
  { id: "junior-magalhaes", name: "Junior Magalhães" },
  { id: "amanda-couto", name: "Amanda Couto" },
  { id: "mateus-carvalho", name: "Mateus Carvalho" },
  { id: "thiago-ep102", name: "Thiago" },
  { id: "raiana-santos", name: "Raiana Santos" },
  { id: "marcella-paiva", name: "Marcella Paiva" },
  { id: "huxley", name: "Huxley" },
  { id: "carlos-henrique", name: "Carlos Henrique" },
  { id: "joca", name: "Joca" },
  { id: "marcos-lavin", name: "Marcos Lavin" },
  { id: "peixoto", name: "Peixoto" },
  { id: "marcel-amiach", name: "Marcel Amiach" },
  { id: "nivaldo", name: "Nivaldo" },
  { id: "thays-bueno", name: "Thays Bueno" },
  { id: "marilia-rosa", name: "Marilia Rosa" },
  { id: "thiago-nascimento", name: "Thiago Nascimento" },
  { id: "marcelo", name: "Marcelo" },
  { id: "lainy-moraes", name: "Laíny Moraes" },
  { id: "benevides", name: "Benevides" },
  { id: "tammy-senra", name: "Tammy Senra" },
  { id: "bolivar", name: "Bolivar" },
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
  { id: "m53", episodeId: 101, personId: "aiquis", productId: "art-science-engineering" },
  { id: "m54", episodeId: 101, personId: "arthur", productId: "spa-inflavel-intex" },
  // Episode 102
  { id: "m15", episodeId: 102, personId: "arthur", productId: "replit" },
  { id: "m16", episodeId: 102, personId: "aiquis", productId: "hevy" },
  { id: "m17", episodeId: 102, personId: "beatriz-morales", productId: "gymrats" },
  { id: "m18", episodeId: 102, personId: "patricia-zago", productId: "gymrats" },
  { id: "m19", episodeId: 102, personId: "tadeu", productId: "strava" },
  { id: "m20", episodeId: 102, personId: "juliana-lisboa", productId: "bike-spinning" },
  { id: "m21", episodeId: 102, personId: "alexandre-pereira", productId: "gemini" },
  { id: "m22", episodeId: 102, personId: "beatriz-fazolo", productId: "gemini" },
  { id: "m23", episodeId: 102, personId: "ronald-falcao", productId: "gemini" },
  { id: "m24", episodeId: 102, personId: "soraya", productId: "gemini" },
  { id: "m25", episodeId: 102, personId: "danilo-penteado", productId: "notebooklm" },
  { id: "m26", episodeId: 102, personId: "cassi-vilvert", productId: "google-docs" },
  { id: "m27", episodeId: 102, personId: "junior-magalhaes", productId: "google-ai-studio" },
  { id: "m28", episodeId: 102, personId: "amanda-couto", productId: "google-ai-studio" },
  { id: "m29", episodeId: 102, personId: "mateus-carvalho", productId: "antigravity" },
  { id: "m30", episodeId: 102, personId: "thiago-ep102", productId: "antigravity" },
  { id: "m31", episodeId: 102, personId: "raiana-santos", productId: "youtube" },
  { id: "m32", episodeId: 102, personId: "marcella-paiva", productId: "youtube" },
  { id: "m33", episodeId: 102, personId: "daniel-gonzalez", productId: "replit" },
  { id: "m34", episodeId: 102, personId: "huxley", productId: "cursor" },
  { id: "m35", episodeId: 102, personId: "carlos-henrique", productId: "cursor" },
  { id: "m36", episodeId: 102, personId: "joca", productId: "elevenlabs" },
  { id: "m37", episodeId: 102, personId: "marcos-lavin", productId: "chatgpt" },
  { id: "m38", episodeId: 102, personId: "marcos-lavin", productId: "notion-ai" },
  { id: "m39", episodeId: 102, personId: "peixoto", productId: "lovable" },
  { id: "m40", episodeId: 102, personId: "marcel-amiach", productId: "wisprflow" },
  { id: "m41", episodeId: 102, personId: "marcel-amiach", productId: "claude-code" },
  { id: "m42", episodeId: 102, personId: "nivaldo", productId: "opal" },
  { id: "m43", episodeId: 102, personId: "junior-magalhaes", productId: "claude-code" },
  { id: "m44", episodeId: 102, personId: "thays-bueno", productId: "databricks" },
  { id: "m45", episodeId: 102, personId: "marilia-rosa", productId: "teams" },
  { id: "m46", episodeId: 102, personId: "thiago-nascimento", productId: "huxe" },
  { id: "m47", episodeId: 102, personId: "marcelo", productId: "ze-delivery" },
  { id: "m48", episodeId: 102, personId: "lainy-moraes", productId: "kindle" },
  { id: "m49", episodeId: 102, personId: "benevides", productId: "caderno" },
  { id: "m50", episodeId: 102, personId: "tammy-senra", productId: "duolingo" },
  { id: "m51", episodeId: 102, personId: "amanda-couto", productId: "ipod-fake" },
  { id: "m52", episodeId: 102, personId: "bolivar", productId: "camisa-preta" },
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
