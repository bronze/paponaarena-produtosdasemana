// Product Arena Radar - Static Data
// Episodes 1 & 2 with all mentions from Papo na Arena podcast

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
    id: 1,
    title: "Episode 1 - Pilot",
    date: "2024-01-15",
    description: "The inaugural episode of Papo na Arena covering AI tools and productivity apps.",
  },
  {
    id: 2,
    title: "Episode 2 - AI Revolution",
    date: "2024-01-22",
    description: "Deep dive into the latest AI developments and their practical applications.",
  },
];

// Products (unique across all episodes)
export const products: Product[] = [
  { id: "bolt", name: "Bolt", category: "AI Tools" },
  { id: "lovable", name: "Lovable", category: "AI Tools" },
  { id: "cursor", name: "Cursor", category: "AI Tools" },
  { id: "v0", name: "v0", category: "AI Tools" },
  { id: "gemini", name: "Gemini", category: "AI Tools" },
  { id: "chatgpt", name: "ChatGPT", category: "AI Tools" },
  { id: "claude", name: "Claude", category: "AI Tools" },
  { id: "perplexity", name: "Perplexity", category: "AI Tools" },
  { id: "copilot", name: "GitHub Copilot", category: "AI Tools" },
  { id: "midjourney", name: "Midjourney", category: "AI Tools" },
  { id: "strava", name: "Strava", category: "Fitness" },
  { id: "whoop", name: "Whoop", category: "Fitness" },
  { id: "garmin", name: "Garmin Connect", category: "Fitness" },
  { id: "peloton", name: "Peloton", category: "Fitness" },
  { id: "notion", name: "Notion", category: "Productivity" },
  { id: "obsidian", name: "Obsidian", category: "Productivity" },
  { id: "linear", name: "Linear", category: "Productivity" },
  { id: "figma", name: "Figma", category: "Design" },
  { id: "framer", name: "Framer", category: "Design" },
  { id: "arc", name: "Arc Browser", category: "Productivity" },
  { id: "raycast", name: "Raycast", category: "Productivity" },
  { id: "slack", name: "Slack", category: "Communication" },
  { id: "discord", name: "Discord", category: "Communication" },
  { id: "spotify", name: "Spotify", category: "Entertainment" },
  { id: "youtube", name: "YouTube", category: "Entertainment" },
  { id: "netflix", name: "Netflix", category: "Entertainment" },
  { id: "vercel", name: "Vercel", category: "Development" },
  { id: "supabase", name: "Supabase", category: "Development" },
  { id: "planetscale", name: "PlanetScale", category: "Development" },
  { id: "railway", name: "Railway", category: "Development" },
  { id: "1password", name: "1Password", category: "Security" },
  { id: "superhuman", name: "Superhuman", category: "Productivity" },
  { id: "cron", name: "Cron Calendar", category: "Productivity" },
  { id: "descript", name: "Descript", category: "AI Tools" },
  { id: "runway", name: "Runway", category: "AI Tools" },
];

// People (contributors/hosts)
export const people: Person[] = [
  { id: "marco", name: "Marco Silva" },
  { id: "julia", name: "Julia Santos" },
  { id: "pedro", name: "Pedro Costa" },
  { id: "ana", name: "Ana Oliveira" },
  { id: "lucas", name: "Lucas Ferreira" },
  { id: "carla", name: "Carla Mendes" },
  { id: "rafael", name: "Rafael Lima" },
  { id: "fernanda", name: "Fernanda Rocha" },
  { id: "bruno", name: "Bruno Almeida" },
  { id: "gabriela", name: "Gabriela Nunes" },
];

// Mentions - Episode 1 (13 mentions)
export const mentions: Mention[] = [
  // Episode 1
  { id: "m1", episodeId: 1, personId: "marco", productId: "chatgpt", context: "Daily driver for research" },
  { id: "m2", episodeId: 1, personId: "marco", productId: "notion", context: "Knowledge base" },
  { id: "m3", episodeId: 1, personId: "julia", productId: "figma", context: "Design workflow" },
  { id: "m4", episodeId: 1, personId: "julia", productId: "arc", context: "Best browser experience" },
  { id: "m5", episodeId: 1, personId: "pedro", productId: "strava", context: "Running tracker" },
  { id: "m6", episodeId: 1, personId: "pedro", productId: "spotify", context: "Workout playlists" },
  { id: "m7", episodeId: 1, personId: "ana", productId: "obsidian", context: "Second brain" },
  { id: "m8", episodeId: 1, personId: "ana", productId: "raycast", context: "Mac productivity" },
  { id: "m9", episodeId: 1, personId: "lucas", productId: "cursor", context: "AI coding" },
  { id: "m10", episodeId: 1, personId: "lucas", productId: "vercel", context: "Deployment" },
  { id: "m11", episodeId: 1, personId: "carla", productId: "slack", context: "Team communication" },
  { id: "m12", episodeId: 1, personId: "carla", productId: "linear", context: "Issue tracking" },
  { id: "m13", episodeId: 1, personId: "rafael", productId: "1password", context: "Security must-have" },

  // Episode 2 (30 mentions)
  { id: "m14", episodeId: 2, personId: "marco", productId: "gemini", context: "Replacing ChatGPT for some tasks" },
  { id: "m15", episodeId: 2, personId: "marco", productId: "claude", context: "Best for long-form writing" },
  { id: "m16", episodeId: 2, personId: "marco", productId: "perplexity", context: "Research replacement for Google" },
  { id: "m17", episodeId: 2, personId: "julia", productId: "bolt", context: "Quick prototyping" },
  { id: "m18", episodeId: 2, personId: "julia", productId: "lovable", context: "Full app generation" },
  { id: "m19", episodeId: 2, personId: "julia", productId: "v0", context: "UI component generation" },
  { id: "m20", episodeId: 2, personId: "julia", productId: "framer", context: "No-code websites" },
  { id: "m21", episodeId: 2, personId: "pedro", productId: "whoop", context: "Recovery tracking" },
  { id: "m22", episodeId: 2, personId: "pedro", productId: "garmin", context: "GPS running watch" },
  { id: "m23", episodeId: 2, personId: "pedro", productId: "strava", context: "Still the social network for athletes" },
  { id: "m24", episodeId: 2, personId: "ana", productId: "chatgpt", context: "Voice mode is incredible" },
  { id: "m25", episodeId: 2, personId: "ana", productId: "notion", context: "AI features improving" },
  { id: "m26", episodeId: 2, personId: "ana", productId: "superhuman", context: "Email productivity" },
  { id: "m27", episodeId: 2, personId: "lucas", productId: "copilot", context: "GitHub integration" },
  { id: "m28", episodeId: 2, personId: "lucas", productId: "cursor", context: "Still the best AI IDE" },
  { id: "m29", episodeId: 2, personId: "lucas", productId: "supabase", context: "Backend as a service" },
  { id: "m30", episodeId: 2, personId: "lucas", productId: "railway", context: "Easy deployments" },
  { id: "m31", episodeId: 2, personId: "carla", productId: "discord", context: "Community building" },
  { id: "m32", episodeId: 2, personId: "carla", productId: "youtube", context: "Content consumption" },
  { id: "m33", episodeId: 2, personId: "carla", productId: "descript", context: "Podcast editing" },
  { id: "m34", episodeId: 2, personId: "rafael", productId: "midjourney", context: "Image generation" },
  { id: "m35", episodeId: 2, personId: "rafael", productId: "runway", context: "Video generation" },
  { id: "m36", episodeId: 2, personId: "rafael", productId: "figma", context: "Design handoff" },
  { id: "m37", episodeId: 2, personId: "fernanda", productId: "netflix", context: "Documentary recommendations" },
  { id: "m38", episodeId: 2, personId: "fernanda", productId: "cron", context: "Calendar management" },
  { id: "m39", episodeId: 2, personId: "fernanda", productId: "arc", context: "Spaces organization" },
  { id: "m40", episodeId: 2, personId: "bruno", productId: "bolt", context: "Rapid prototyping" },
  { id: "m41", episodeId: 2, personId: "bruno", productId: "lovable", context: "Preferred for complex apps" },
  { id: "m42", episodeId: 2, personId: "gabriela", productId: "peloton", context: "Home workouts" },
  { id: "m43", episodeId: 2, personId: "gabriela", productId: "planetscale", context: "Database scaling" },
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
