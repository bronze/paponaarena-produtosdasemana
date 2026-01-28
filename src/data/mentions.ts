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
  parentId?: string; // For variants that roll up to a parent (e.g., uber-black → uber)
  alsoCredits?: string[]; // For combo mentions that credit multiple products (e.g., uber-livelo → uber + livelo)
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
  // 2025 Episodes
  {
    id: 65,
    title: "As previsões que ninguém pediu sobre Produto, AI e mercado tech em 2025",
    date: "2025-01-08",
    description: "Previsões sobre produto, IA e o mercado tech para 2025.",
  },
  {
    id: 66,
    title: "Dicas para ter conversas difíceis e Como fazer protótipos com AI",
    date: "2025-01-15",
    description: "Discussões sobre conversas difíceis e prototipagem com IA.",
  },
  {
    id: 67,
    title: "A importância dos 'selos' na carreira de produtos e a hora dos generalistas",
    date: "2025-01-22",
    description: "Reflexões sobre carreira de produtos e o papel dos generalistas.",
  },
  {
    id: 68,
    title: "DeepSeek para Leigos: o modelo chinês que chegou para causar!",
    date: "2025-01-29",
    description: "Análise do DeepSeek e seu impacto no mercado de IA.",
  },
  {
    id: 69,
    title: "Criando comunidades, matando features e priorizando no-code, com Beatriz Kinguti, CPO da LITI saúde",
    date: "2025-02-05",
    description: "Entrevista com Beatriz Kinguti sobre comunidades e no-code.",
  },
  {
    id: 70,
    title: "Nossas experiências construindo apps com AI",
    date: "2025-02-12",
    description: "Experiências práticas construindo aplicativos com IA.",
  },
  {
    id: 71,
    title: "O Handbook do Duolingo vai ser o novo 'modelo Spotify'?",
    date: "2025-02-19",
    description: "Análise do handbook do Duolingo e seu impacto na indústria.",
  },
  {
    id: 72,
    title: "Seu roadmap vai mudar, e tá tudo bem.",
    date: "2025-02-26",
    description: "Discussão sobre flexibilidade no planejamento de produto.",
  },
  {
    id: 73,
    title: "AI Mudando o roadmap da Apple e Figma e Como manter a energia de produto no alto?",
    date: "2025-03-12",
    description: "Impacto da IA nos roadmaps de grandes empresas.",
  },
  {
    id: 74,
    title: "Métricas, pra que te quero?!",
    date: "2025-03-19",
    description: "Discussão sobre o uso de métricas em produto.",
  },
  {
    id: 75,
    title: "Contratação de PMs - o que não pode faltar?",
    date: "2025-03-26",
    description: "Dicas para contratação de Product Managers.",
  },
  {
    id: 76,
    title: "O que muda em produto com o novo modelo da OpenAI",
    date: "2025-04-02",
    description: "Impacto do novo modelo da OpenAI em produtos.",
  },
  {
    id: 77,
    title: "O plano do Shopify para forçar toda a empresa a usar AI",
    date: "2025-04-08",
    description: "Análise da estratégia de IA do Shopify.",
  },
  {
    id: 78,
    title: "Porque você deveria revisar sua agenda",
    date: "2025-04-16",
    description: "Reflexões sobre gestão de tempo e agenda.",
  },
  {
    id: 79,
    title: "Mitos da Liderança de Produtos",
    date: "2025-04-22",
    description: "Desmistificando crenças sobre liderança de produto.",
  },
  {
    id: 80,
    title: "Ray-Ban, anúncios e AI: os planos do Zuck para a Meta",
    date: "2025-05-07",
    description: "Análise dos planos da Meta para IA e wearables.",
  },
  {
    id: 81,
    title: "Síndrome do Impostor na Liderança de Produtos",
    date: "2025-05-15",
    description: "Discussão sobre síndrome do impostor em líderes de produto.",
  },
  {
    id: 82,
    title: "SEMANA INSANA EM AI: Lançamentos da Anthropic, Google IO, Microsoft Build e OpenAI",
    date: "2025-05-28",
    description: "Cobertura dos principais lançamentos de IA.",
  },
  {
    id: 83,
    title: "Como estamos usando IA no dia a dia? Com Éfrem Filho, Principal PM @ Pipefy",
    date: "2025-06-05",
    description: "Entrevista sobre uso prático de IA no dia a dia.",
  },
  {
    id: 84,
    title: "Redesign do iOS e os lançamentos da WWDC",
    date: "2025-06-10",
    description: "Cobertura da WWDC e novo design do iOS.",
  },
  {
    id: 85,
    title: "Como formar times que sabem levar porrada",
    date: "2025-06-18",
    description: "Discussão sobre resiliência em times de produto.",
  },
  {
    id: 86,
    title: "Como a AI está reescrevendo as regras de produto e distribuição",
    date: "2025-07-01",
    description: "Impacto da IA nas regras de produto e distribuição.",
  },
  {
    id: 87,
    title: "O guia prático para adoção de IA na sua empresa",
    date: "2025-07-10",
    description: "Guia prático para implementar IA em empresas.",
  },
  {
    id: 88,
    title: "Quão longe dá pra ir com AI sem um dev?",
    date: "2025-07-23",
    description: "Explorando limites do no-code com IA.",
  },
  {
    id: 89,
    title: "Tomando decisões com AI",
    date: "2025-07-30",
    description: "Como usar IA para tomada de decisões.",
  },
  {
    id: 90,
    title: "ChatGPT-5: Flopou ou Revolucionou?",
    date: "2025-08-13",
    description: "Análise do ChatGPT-5 e seu impacto.",
  },
  {
    id: 91,
    title: "Entre tapas e beijos: a relação entre produto e engenharia",
    date: "2025-08-22",
    description: "Dinâmica entre times de produto e engenharia.",
  },
  {
    id: 92,
    title: "O que está por trás da 'exigência' de IA nas empresas?",
    date: "2025-08-27",
    description: "Reflexões sobre a pressão por IA nas empresas.",
  },
  {
    id: 93,
    title: "Reorgs na Prática: Erros, Aprendizados e Trade-offs",
    date: "2025-09-04",
    description: "Discussão sobre reorganizações empresariais.",
  },
  {
    id: 94,
    title: "Os novos iPhones: A Apple perdeu a magia?",
    date: "2025-09-10",
    description: "Análise dos novos iPhones da Apple.",
  },
  {
    id: 95,
    title: "Meta Display: o novo iPhone?",
    date: "2025-09-22",
    description: "Análise do Meta Display e seu potencial.",
  },
  {
    id: 96,
    title: "Uma semana insana de lançamentos em IA",
    date: "2025-10-01",
    description: "Cobertura de lançamentos de IA.",
  },
  {
    id: 97,
    title: "Panorama de Produto 2025: salários e tendências",
    date: "2025-10-08",
    description: "Análise de salários e tendências em produto.",
  },
  {
    id: 98,
    title: "Como foi o Product Leader Summit 2025?",
    date: "2025-11-06",
    description: "Cobertura do Product Leader Summit 2025.",
  },
  {
    id: 99,
    title: "IA é uma bolha? O que isso muda na sua vida",
    date: "2025-11-21",
    description: "Discussão sobre a sustentabilidade da IA.",
  },
  // 2026 Episodes
  {
    id: 101,
    title: "As previsões 2026 que ninguém pediu sobre Produto, AI e mercado tech",
    date: "2026-01-13",
    description: "Previsões ousadas sobre produto, IA e o mercado tech para 2026.",
  },
  {
    id: 102,
    title: "Claude Code: acabou pro ChatGPT?",
    date: "2026-01-20",
    description: "Discussão sobre Claude Code e o futuro das ferramentas de IA.",
  },
  {
    id: 103,
    title: "Você tem Product Sense?",
    date: "2026-01-28",
    description: "Discussão sobre Product Sense e as ferramentas da semana.",
  },
];

// Products (unique across all episodes)
export const products: Product[] = [
  // AI Tools
  { id: "bolt", name: "Bolt", category: "AI Tools", url: "https://bolt.new" },
  { id: "lovable", name: "Lovable", category: "AI Tools", url: "https://lovable.dev" },
  { id: "wisprflow", name: "WisprFlow", category: "AI Tools", url: "https://wisprflow.ai" },
  { id: "gemini", name: "Gemini", category: "AI Tools", url: "https://gemini.google.com/" },
  { id: "replit", name: "Replit", category: "AI Tools", url: "https://replit.com" },
  { id: "notebooklm", name: "NotebookLM", category: "AI Tools", url: "https://notebooklm.google.com" },
  {
    id: "google-ai-studio",
    name: "Google AI Studio",
    category: "AI Tools",
    url: "https://aistudio.google.com",
    parentId: "gemini",
  },
  { id: "cursor", name: "Cursor", category: "AI Tools", url: "https://cursor.com" },
  { id: "elevenlabs", name: "ElevenLabs", category: "AI Tools", url: "https://elevenlabs.io" },
  { id: "chatgpt", name: "ChatGPT", category: "AI Tools", url: "https://chat.openai.com" },
  { id: "notion-ai", name: "Notion AI", category: "Productivity", url: "https://notion.so", parentId: "notion" },
  { id: "claude-code", name: "Claude Code", category: "AI Tools", url: "https://claude.ai" },
  { id: "huxe", name: "Huxe", category: "AI Tools", url: "https://www.huxe.com/" },
  { id: "claude", name: "Claude", category: "AI Tools", url: "https://claude.ai" },
  { id: "ollama", name: "Ollama", category: "AI Tools", url: "https://ollama.ai" },
  { id: "glean", name: "Glean", category: "AI Tools", url: "https://glean.com" },
  { id: "perplexity", name: "Perplexity", category: "AI Tools", url: "https://perplexity.ai" },
  { id: "manus-ai", name: "Manus AI", category: "AI Tools", url: "https://manus.im/" },
  { id: "v0", name: "v0", category: "AI Tools", url: "https://v0.dev" },
  { id: "windsurf", name: "Windsurf", category: "AI Tools", url: "https://windsurf.com/" },
  { id: "claude-opus-4", name: "Claude Opus 4", category: "AI Tools", url: "https://claude.ai", parentId: "claude" },
  {
    id: "claude-sonnet-45",
    name: "Claude Sonnet 4.5",
    category: "AI Tools",
    url: "https://claude.ai",
    parentId: "claude",
  },
  { id: "deepseek", name: "DeepSeek", category: "AI Tools", url: "https://deepseek.com" },
  { id: "dola-ai", name: "Dola AI", category: "AI Tools", url: "https://www.dola.com/" },
  { id: "opusclip", name: "OpusClip", category: "AI Tools", url: "https://opus.pro" },
  { id: "comet-perplexity", name: "Comet Perplexity", category: "AI Tools", parentId: "perplexity" },
  { id: "openai", name: "Open AI", category: "AI Tools", url: "https://openai.com" },
  { id: "lechat", name: "LeChat", category: "AI Tools", url: "https://chat.mistral.ai/" },
  { id: "perplexity-labs", name: "Perplexity Labs", category: "AI Tools", parentId: "perplexity" },
  { id: "firebase-studio", name: "Firebase Studio", category: "AI Tools", url: "https://firebase.studio/" },
  { id: "mindstudio", name: "MindStudio", category: "AI Tools", url: "https://www.mindstudio.ai/" },
  {
    id: "kayak-gpt",
    name: "Kayak GPT",
    category: "AI Tools",
    url: "https://chatgpt.com/g/g-hcqdAuSMv-kayak-flights-hotels-cars",
  },
  { id: "chatgpt-o3", name: "ChatGPT o3", category: "AI Tools", parentId: "chatgpt" },
  { id: "chatgpt-search", name: "ChatGPT Search", category: "AI Tools", parentId: "chatgpt" },
  { id: "chatgpt-images", name: "ChatGPT - novo modelo de imagens", category: "AI Tools", parentId: "chatgpt" },
  { id: "chatgpt-projects", name: "ChatGPT Projects", category: "AI Tools", parentId: "chatgpt" },
  {
    id: "claude-code-chatgpt",
    name: "Claude Code + ChatGPT",
    category: "AI Tools",
    alsoCredits: ["claude-code", "chatgpt"],
  },
  { id: "codex-openai", name: "Codex da OpenAI", category: "AI Tools", url: "https://openai.com/pt-BR/codex/" },
  {
    id: "acrobat-ai",
    name: "Acrobat AI Assistant",
    category: "AI Tools",
    url: "https://www.adobe.com/acrobat/generative-ai-pdf.html",
  },
  { id: "veo3", name: "Veo3", category: "AI Tools" },
  { id: "suno-ai", name: "Suno AI", category: "AI Tools", url: "https://suno.ai" },
  { id: "moises-ai", name: "Moises.AI", category: "AI Tools", url: "https://moises.ai" },
  { id: "captions", name: "Captions", category: "AI Tools", url: "https://www.captions.ai/" },
  { id: "napkin", name: "Napkin", category: "AI Tools", url: "https://www.napkin.ai/" },
  { id: "tldv", name: "TL;DV", category: "AI Tools", url: "https://tldv.io" },
  { id: "plaud", name: "Plaud", category: "AI Tools", url: "https://www.plaud.ai/" },
  { id: "magie", name: "Magie", category: "AI Tools", url: "https://magie.com.br/" },
  { id: "antigravity", name: "Antigravity", category: "AI Tools", url: "https://antigravity.google/" },
  { id: "canvas", name: "Canvas", category: "AI Tools" },
  { id: "chatprd", name: "ChatPRD", category: "AI Tools", url: "https://chatprd.ai" },
  { id: "isla", name: "Isla", category: "AI Tools" },

  // Automation
  { id: "make", name: "Make", category: "Automation", url: "https://make.com" },
  { id: "n8n", name: "N8N", category: "Automation", url: "https://n8n.io" },
  { id: "zapier", name: "Zapier", category: "Automation", url: "https://zapier.com" },
  { id: "relay-app", name: "Relay.App", category: "Automation", url: "https://relay.app" },
  { id: "power-automate", name: "Power Automate", category: "Automation", url: "https://powerautomate.microsoft.com" },

  // Fitness
  { id: "strava", name: "Strava", category: "Fitness", url: "https://strava.com" },
  { id: "hevy", name: "Hevy", category: "Fitness", url: "https://hevyapp.com" },
  { id: "gymrats", name: "GymRats", category: "Fitness", url: "https://gymratsapp.com" },
  { id: "bike-spinning", name: "Bike de Spinning", category: "Fitness" },
  { id: "whoop", name: "Whoop", category: "Fitness", url: "https://whoop.com" },
  { id: "samsung-watch-ultra", name: "Samsung Watch Ultra", category: "Fitness", parentId: "samsung-wearable" },
  { id: "samsung-wearable", name: "Samsung Wearable", category: "Fitness" },
  { id: "training-peaks", name: "Training Peaks", category: "Fitness", url: "https://trainingpeaks.com" },
  { id: "trainiac", name: "Trainiac", category: "Fitness" },
  { id: "total-pass", name: "Total Pass", category: "Fitness" },
  { id: "wellhub", name: "Wellhub", category: "Fitness" },
  { id: "mfit-personal", name: "MFIT Personal", category: "Fitness" },
  { id: "runstory", name: "RunStory", category: "Fitness" },
  { id: "bicicleta-equilibrio", name: "Bicicleta de equilíbrio", category: "Fitness" },
  { id: "asics-superblast-2", name: "Asics Superblast 2", category: "Fitness" },
  { id: "asics-house", name: "Asics House no Parque Bruno Covas", category: "Fitness" },
  { id: "liti", name: "Liti", category: "Fitness" },
  { id: "fitness-plus", name: "Fitness+", category: "Fitness" },
  { id: "yazio", name: "Yazio", category: "Fitness" },
  { id: "streaks", name: "Streaks", category: "Fitness" },

  // Analytics
  { id: "amplitude", name: "Amplitude", category: "Analytics", url: "https://amplitude.com" },
  { id: "databricks", name: "Databricks", category: "Data", url: "https://databricks.com" },

  // Travel
  { id: "airbnb", name: "Airbnb", category: "Travel", url: "https://airbnb.com" },
  { id: "booking", name: "Booking.com", category: "Travel", url: "https://booking.com" },
  { id: "klook", name: "Klook", category: "Travel", url: "https://klook.com" },
  { id: "wanderlog", name: "Wanderlog", category: "Travel", url: "https://wanderlog.com" },
  { id: "skyscanner", name: "Skyscanner", category: "Travel", url: "https://skyscanner.com" },
  { id: "time-shifter", name: "Time Shifter", category: "Travel" },
  { id: "uk-eta", name: "UK ETA", category: "Travel" },

  // Transportation
  { id: "99", name: "99", category: "Transportation", url: "https://99app.com" },
  { id: "uber", name: "Uber", category: "Transportation", url: "https://uber.com" },
  { id: "uber-livelo", name: "Uber + Livelo", category: "Transportation", alsoCredits: ["uber", "livelo"] },
  { id: "uber-black", name: "Uber Black", category: "Transportation", parentId: "uber" },
  { id: "uber-agendamento", name: "Agendamento de corrida Uber", category: "Transportation", parentId: "uber" },
  { id: "waze", name: "Waze", category: "Transportation", url: "https://waze.com" },
  { id: "blablacar", name: "Blablacar", category: "Transportation", url: "https://blablacar.com" },
  { id: "turbi", name: "Turbi", category: "Transportation" },
  { id: "patinete-jet", name: "Patinete Jet", category: "Transportation" },
  { id: "tiggo-7", name: "Tiggo 7", category: "Transportation" },
  { id: "carplay", name: "Carplay", category: "Transportation" },
  { id: "bluelink", name: "Bluelink", category: "Transportation" },
  { id: "carteira-transito", name: "Carteira Digital de Trânsito", category: "Transportation" },
  { id: "bilhete-unico", name: "Bilhete Único", category: "Transportation" },

  // Social
  { id: "twitter", name: "Twitter", category: "Social", url: "https://x.com" },
  { id: "tiktok", name: "TikTok", category: "Social", url: "https://tiktok.com" },
  { id: "linkedin", name: "LinkedIn", category: "Social", url: "https://linkedin.com" },
  { id: "pixelfed", name: "Pixelfed", category: "Social" },

  // Productivity
  { id: "loom", name: "Loom", category: "Productivity", url: "https://loom.com" },
  { id: "google-docs", name: "Google Docs", category: "Productivity", url: "https://docs.google.com" },
  { id: "teams", name: "Teams", category: "Productivity", url: "https://teams.microsoft.com" },
  { id: "notion", name: "Notion", category: "Productivity", url: "https://notion.so" },
  { id: "obsidian", name: "Obsidian", category: "Productivity", url: "https://obsidian.md" },
  { id: "canva", name: "Canva", category: "Productivity", url: "https://canva.com" },
  { id: "figma", name: "Figma", category: "Productivity", url: "https://figma.com" },
  { id: "figma-make", name: "Figma Make", category: "Productivity", parentId: "figma" },
  { id: "clickup", name: "ClickUp", category: "Productivity", url: "https://clickup.com" },
  { id: "google-slides", name: "Google Slides", category: "Productivity" },
  { id: "google-maps", name: "Google Maps", category: "Productivity", url: "https://maps.google.com" },
  { id: "raindrop", name: "Raindrop", category: "Productivity", url: "https://raindrop.io" },
  { id: "onesec", name: "OneSec", category: "Productivity" },
  { id: "shortcuts-ios", name: "Shortcuts do iOS", category: "Productivity" },
  { id: "apple-shortcut", name: "Shortcut da Apple", category: "Productivity", parentId: "shortcuts-ios" },
  { id: "copilot-365", name: "Microsoft Copilot 365", category: "Productivity" },
  { id: "post-it", name: "Post It", category: "Productivity" },
  { id: "insight-timer", name: "Insight Timer", category: "Productivity" },
  { id: "timeline-sheets", name: "Timeline no Google Sheets", category: "Productivity" },
  { id: "polycam", name: "Polycam - Scanner 3D", category: "Productivity" },
  { id: "kong-api", name: "Kong API Gateway", category: "Productivity" },
  { id: "testflight", name: "TestFlight", category: "Productivity" },
  { id: "cloud-cowork", name: "Cloud Cowork", category: "Productivity" },
  { id: "gchat", name: "GChat", category: "Productivity" },
  { id: "jira", name: "Jira", category: "Productivity", url: "https://www.atlassian.com/software/jira" },
  { id: "google-script", name: "Google Script", category: "Productivity" },

  // Education
  { id: "vocabulary", name: "Vocabulary", category: "Education", url: "https://vocabulary.com" },
  { id: "duolingo", name: "Duolingo", category: "Education", url: "https://duolingo.com" },
  { id: "12min", name: "12min", category: "Education" },
  { id: "headway", name: "Headway", category: "Education" },
  { id: "brilliant", name: "Brilliant", category: "Education", url: "https://brilliant.org" },
  { id: "mimo", name: "Mimo.org", category: "Education", url: "https://mimo.org" },
  { id: "curso-ia-nocode", name: "Curso de IA + NoCode", category: "Education" },
  { id: "focumon", name: "Focumon", category: "Education" },
  { id: "audible", name: "Audible", category: "Education", url: "https://audible.com" },

  // Entertainment
  { id: "youtube", name: "Youtube", category: "Entertainment", url: "https://youtube.com" },
  { id: "disney-plus", name: "Disney+", category: "Entertainment", url: "https://disneyplus.com" },
  { id: "appletv-plus", name: "AppleTV+", category: "Entertainment", url: "https://tv.apple.com" },
  { id: "max", name: "Max", category: "Entertainment", url: "https://max.com" },
  { id: "globoplay", name: "Globoplay", category: "Entertainment", url: "https://globoplay.globo.com" },
  { id: "prime-video", name: "Prime Video", category: "Entertainment", url: "https://primevideo.com" },
  { id: "topspin-2k25", name: "TopSpin 2k25", category: "Entertainment" },
  { id: "pokemon-legends", name: "Pokemon Legends", category: "Entertainment" },
  { id: "clair-obscur", name: "Clair Obscur: Expedition 33", category: "Entertainment" },
  { id: "hollow-knight-silksong", name: "Hollow Knight Silksong", category: "Entertainment" },
  { id: "alien-earth", name: "Alien Earth", category: "Entertainment" },
  { id: "viki", name: "Viki", category: "Entertainment", url: "https://viki.com" },
  { id: "tidal-hifi", name: "Tidal HiFi", category: "Entertainment" },
  { id: "spotify", name: "Spotify", category: "Entertainment", url: "https://spotify.com" },
  { id: "shazam", name: "Shazam", category: "Entertainment" },
  { id: "songsterr", name: "Songsterr", category: "Entertainment" },
  { id: "cazetv", name: "CazéTV", category: "Entertainment", url: "https://www.youtube.com/cazetv" },
  { id: "pixverse", name: "Pixverse", category: "Entertainment" },
  { id: "pokeflix", name: "Pokeflix", category: "Entertainment" },
  { id: "gameboy-advanced", name: "Game Boy Advanced", category: "Entertainment" },
  { id: "hipercap-brasil", name: "HiperCap Brasil", category: "Entertainment" },
  { id: "loteria", name: "Loteria", category: "Entertainment" },
  { id: "acquired-podcast", name: "Acquired Podcast", category: "Entertainment" },

  // Finance
  { id: "livelo", name: "Livelo", category: "Finance", url: "https://livelo.com.br" },
  { id: "c6", name: "C6", category: "Finance", url: "https://c6bank.com.br" },
  { id: "picpay", name: "PicPay", category: "Finance", url: "https://picpay.com" },
  { id: "wise", name: "Wise", category: "Finance", url: "https://wise.com" },
  { id: "brasil-bitcoin", name: "Brasil Bitcoin", category: "Finance" },
  { id: "binance", name: "Binance", category: "Finance", url: "https://binance.com" },
  { id: "irpf25", name: "IRPF25", category: "Finance" },
  { id: "irpf2025", name: "IRPF2025", category: "Finance", parentId: "irpf25" },
  { id: "coinmarket-cap", name: "Coinmarket Cap", category: "Finance" },
  { id: "mercado-bitcoin", name: "Mercado Bitcoin", category: "Finance" },
  { id: "gorila", name: "Gorila", category: "Finance" },
  { id: "pagaleve", name: "Pagaleve", category: "Finance" },
  { id: "pagol", name: "PaGol", category: "Finance" },
  { id: "calculadora-loft", name: "Calculadora financiamento loft", category: "Finance" },
  { id: "minhas-financas", name: "Minhas Finanças", category: "Finance" },
  { id: "app-fgc", name: "App do FGC", category: "Finance" },

  // Lifestyle
  { id: "agua", name: "Água", category: "Lifestyle" },
  { id: "kindle", name: "Kindle", category: "Reading", url: "https://amazon.com/kindle" },
  { id: "caderno", name: "Caderno", category: "Lifestyle" },
  { id: "ipod-fake", name: "iPod Fake Classic", category: "Hardware", url: "https://a.aliexpress.com/_mtFXV0l" },
  { id: "camisa-preta", name: "Camisa Preta Básica", category: "Lifestyle" },
  { id: "copo-stanley", name: "Copo Stanley", category: "Lifestyle" },
  { id: "frigideira-antiaderente", name: "Frigideira antiaderente", category: "Lifestyle" },
  { id: "filtro-cafe-inox", name: "Filtro de Café de Inox", category: "Lifestyle" },
  { id: "pao-queijo-3reis", name: "Pão de queijo recheado 3 Reis", category: "Lifestyle" },
  { id: "barrinha-pistache-bold", name: "Barrinha de pistache da Bold", category: "Lifestyle" },
  { id: "personal-blender", name: "Personal Blender", category: "Lifestyle" },
  { id: "abridor-vinho-eletrico", name: "Abridor de vinho elétrico da AliExpress", category: "Lifestyle" },
  { id: "aquecedor-wap", name: "Aquecedor portátil Wap Air Heat Ceramic elétrico", category: "Lifestyle" },
  { id: "panificadora-mondial", name: "Panificadora Automática master Bread NPF-54 Mondial", category: "Lifestyle" },
  { id: "robozinho-kabum", name: "Robozinho limpeza KaBuM! Smart 900", category: "Lifestyle" },
  { id: "camera-tapo", name: "Camera TP-Link (Tapo)", category: "Lifestyle" },
  { id: "bateria-moura", name: "Bateria Moura", category: "Lifestyle" },
  { id: "locker-ibira", name: "Locker - Ibirapuera", category: "Lifestyle" },
  { id: "rentbrella", name: "Rentbrella", category: "Lifestyle" },
  { id: "uno", name: "Uno", category: "Lifestyle" },
  { id: "hidrogel", name: "Hidrogel", category: "Lifestyle" },
  { id: "waterminder", name: "WaterMinder", category: "Lifestyle" },
  { id: "tag-sem-parar", name: "Tag Sem Parar", category: "Lifestyle", url: "https://www.semparar.com.br/" },
  { id: "smart-things-samsung", name: "Smart Things Samsung", category: "Lifestyle" },
  { id: "xbox-series-s", name: "Xbox Series S", category: "Lifestyle" },
  { id: "nintendo-switch-2", name: "Nintendo Switch 2", category: "Lifestyle" },
  { id: "cereal-snowflake", name: "Cereal Snowflake", category: "Lifestyle" },
  { id: "as-semanas-magicas", name: "As semanas mágicas", category: "Lifestyle" },
  { id: "beerpass", name: "Beerpass", category: "Lifestyle", url: "https://beerpass.com.br" },
  { id: "duo-gourmet", name: "Duo Gourmet", category: "Lifestyle", url: "https://duogourmet.com.br" },
  { id: "massageador-pescoco", name: "Massageador de pescoço e ombros", category: "Lifestyle" },

  // Wellness
  { id: "opal", name: "Opal", category: "Wellness", url: "https://opal.so" },
  { id: "beep-saude", name: "Beep Saúde", category: "Wellness" },
  { id: "dasa", name: "Dasa", category: "Wellness" },
  { id: "fleury", name: "Fleury", category: "Wellness" },
  { id: "dia", name: "Dia", category: "Wellness" },

  // Delivery
  { id: "ze-delivery", name: "Zé Delivery", category: "Delivery", url: "https://zedelivery.com.br" },
  { id: "ifood", name: "iFood", category: "Delivery", url: "https://ifood.com.br" },
  { id: "shopper", name: "Shopper", category: "Delivery" },
  { id: "picnic", name: "PicNic", category: "Delivery" },
  { id: "pedidos-ya", name: "Pedidos Ya", category: "Delivery" },

  // Tech/Dev
  { id: "supabase", name: "Supabase", category: "Tech", url: "https://supabase.com" },
  { id: "warp", name: "Warp", category: "Tech", url: "https://warp.dev" },
  { id: "ghost", name: "Ghost", category: "Tech", url: "https://ghost.org" },
  { id: "obs-studio", name: "OBS Studio", category: "Tech" },
  { id: "capcut", name: "CapCut", category: "Tech", url: "https://capcut.com" },
  { id: "easypanel", name: "EasyPanel", category: "Tech" },
  { id: "artigo-app", name: "Artigo.app", category: "Tech" },
  { id: "riverside", name: "Riverside", category: "Tech", url: "https://riverside.fm" },
  { id: "elementor", name: "Elementor", category: "Tech" },
  { id: "anyigo", name: "AnyIGo", category: "Tech" },
  { id: "cam-studio", name: "Cam Studio", category: "Tech" },
  { id: "substack", name: "Substack", category: "Tech", url: "https://substack.com" },
  { id: "grit", name: "Grit", category: "Tech" },
  { id: "fanthom", name: "Fanthom", category: "Tech" },
  { id: "chrome", name: "Chrome", category: "Tech" },
  { id: "api-facebook", name: "API do Facebook", category: "Tech" },
  { id: "adobe-lightroom", name: "Adobe Lightroom", category: "Tech" },

  // Insurance
  { id: "allianz-seguros", name: "Allianz Seguros", category: "Insurance" },
  { id: "bradesco-seguros", name: "Bradesco Seguros", category: "Insurance" },
  { id: "porto-seguro", name: "Porto Seguro Chatbot", category: "Insurance" },

  // Business
  { id: "home-planner", name: "Home Planner", category: "Business" },
  { id: "mlabs", name: "MLabs", category: "Business" },
  { id: "afya-receita-pro", name: "Afya Receita Pro", category: "Business" },
  { id: "maze", name: "maze.co", category: "Business", url: "https://maze.co" },
  { id: "trela", name: "Trela", category: "Business" },
  { id: "splitwise", name: "Splitwise", category: "Business", url: "https://splitwise.com" },
  { id: "tricount", name: "Tricount", category: "Business" },
  { id: "boosteroid", name: "Boosteroid", category: "Business" },
  { id: "skoob", name: "Skoob", category: "Business" },
  { id: "skeelo", name: "Skeelo", category: "Business" },
  { id: "etsy", name: "Etsy", category: "Business", url: "https://etsy.com" },
  { id: "olx", name: "OLX", category: "Business", url: "https://olx.com.br" },
  { id: "ebay", name: "Ebay", category: "Business", url: "https://ebay.com" },
  { id: "mercado-livre", name: "Mercado Livre", category: "Business", url: "https://mercadolivre.com.br" },
  { id: "prypco-mint", name: "Prypco Mint (Dubai)", category: "Business" },
  { id: "hotmart", name: "Hotmart", category: "Business", url: "https://hotmart.com" },
  { id: "buyticket", name: "BuyTicket", category: "Business" },
  { id: "buffetmax", name: "Buffetmax", category: "Business" },
  { id: "top", name: "Top", category: "Business" },
  { id: "dominguinho", name: "Dominguinho", category: "Business" },
  { id: "bluma", name: "Bluma", category: "Business" },
  { id: "elephan", name: "Elephan", category: "Business" },
  { id: "parafuzo", name: "Parafuzo", category: "Business" },
  { id: "poke", name: "Poke.com", category: "Business" },
  { id: "kiwi", name: "Kiwi", category: "Business" },
  { id: "pexels", name: "Pexels", category: "Business", url: "https://pexels.com" },
  { id: "vivino", name: "Vivino", category: "Business", url: "https://vivino.com" },
  { id: "u-haul", name: "U-haul", category: "Business" },
  { id: "weed-maps", name: "Weed Maps", category: "Business" },
  { id: "oracle", name: "Sistema Oracle", category: "Business" },
  { id: "bblend", name: "BBlend", category: "Business" },
  { id: "ultragas", name: "Ultragás", category: "Business" },
  { id: "calculadora-ios18", name: "Calculadora do iOS 18", category: "Business" },
  { id: "speechify", name: "Speechify", category: "Business" },
  { id: "raizs", name: "Raizs", category: "Business" },
  { id: "icasei", name: "Assessoria Vip / iCasei", category: "Business" },
  { id: "event-tracker-aiquis", name: "Event Tracker do Aíquis", category: "Business" },
  { id: "be-my-eyes", name: "Be My Eyes", category: "Business" },
  { id: "whatsapp", name: "WhatsApp", category: "Business", url: "https://whatsapp.com" },
  { id: "buy-tickets", name: "Buy Tickets", category: "Business" },

  // Apps
  { id: "tela", name: "Tela.com", category: "Apps" },
  { id: "smart-view-android", name: "Smart View Android", category: "Apps" },
  { id: "apollo", name: "Apollo", category: "Apps" },
  { id: "moonlight", name: "Moonlight", category: "Apps" },
  { id: "super-app-galo", name: "Super App do Galo", category: "Apps" },
  { id: "soundcore-q30", name: "Anker Soundcore Q30", category: "Hardware", url: "https://a.co/d/gV4mUHw" },
  { id: "anker-powerconf", name: "Anker Webcam PowerConf C200", category: "Hardware", url: "https://a.co/d/7xvenCB" },
  { id: "logitech-mx-vertical", name: "Logitech MX Vertical", category: "Hardware", url: "https://a.co/d/ec0lWnE" },
  { id: "mymind", name: "Mymind", category: "Apps" },
  { id: "atlas", name: "Atlas", category: "Apps" },
  { id: "sitly", name: "Sitly", category: "Apps", url: "https://sitly.com.br" },
  { id: "gravador-voz", name: "Gravador de voz com transcrição", category: "Apps" },

  // Original products from 2026 episodes
  {
    id: "art-science-engineering",
    name: "The Art of Doing Science and Engineering: Learning to Learn",
    category: "Education",
    url: "https://substack.com/redirect/d44ff958-d2d1-476e-b90e-720a653353bc?j=eyJ1IjoiM2Z4N2xsIn0.hprP9-m3wJcmtKuXGObKSXN8QwqEhdmH1uzVY49NegA",
  },
  {
    id: "spa-inflavel-intex",
    name: "Spa Inflável 795L 120 Jatos PureSpa Bubbles Intex",
    category: "Lifestyle",
    url: "https://substack.com/redirect/4e097965-e146-4a63-b675-520b7728263f?j=eyJ1IjoiM2Z4N2xsIn0.hprP9-m3wJcmtKuXGObKSXN8QwqEhdmH1uzVY49NegA",
  },
];

// People (contributors/hosts)
export const people: Person[] = [
  // Core hosts/contributors
  { id: "arthur", name: "Arthur" },
  { id: "aiquis", name: "Aíquis" },
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
  // 2025 contributors
  { id: "neves", name: "Neves" },
  { id: "alana", name: "Alana" },
  { id: "jessica-luz", name: "Jessica Luz" },
  { id: "iza-godoy", name: "Iza Godoy" },
  { id: "arthur-azevedo", name: "Arthur Azevedo" },
  { id: "thiago-sturmer", name: "Thiago Sturmer" },
  { id: "julia-patrocinio", name: "Julia Patrocinio" },
  { id: "lucas-lima", name: "Lucas Lima" },
  { id: "vinicius-maricato", name: "Vinicius Maricato" },
  { id: "filipe-barros", name: "Filipe Barros" },
  { id: "marina-moreira", name: "Marina Moreira" },
  { id: "fabin", name: "Fabin" },
  { id: "andre-menezes", name: "Andre Menezes" },
  { id: "caue", name: "Cauê" },
  { id: "lucas-mattos", name: "Lucas Mattos" },
  { id: "nana", name: "Nana" },
  { id: "silvinha", name: "Silvinha" },
  { id: "welington-souza", name: "Welington Souza" },
  { id: "leandro-coelho", name: "Leandro Coelho" },
  { id: "camila-jordana", name: "Camila Jordana" },
  { id: "brian", name: "Brian" },
  { id: "bruna-fragelli", name: "Bruna Fragelli" },
  { id: "victor-nery", name: "Victor Nery" },
  { id: "horacio", name: "Horacio" },
  { id: "danilera", name: "Danilera" },
  { id: "mat", name: "Mat" },
  { id: "paulo", name: "Paulo" },
  { id: "nina", name: "Nina" },
  { id: "camila-ruas", name: "Camila Ruas" },
  { id: "arthur-magalhaes", name: "Arthur Magalhães" },
  { id: "bob", name: "Bob" },
  { id: "kamilla-felix", name: "Kamilla Felix" },
  { id: "rafael-ferreira", name: "Rafael Ferreira" },
  { id: "fernanda", name: "Fernanda" },
  { id: "leandro", name: "Leandro" },
  { id: "rafael-valente", name: "Rafael Valente" },
  { id: "amilker", name: "Amilker" },
  { id: "mariana-curi", name: "Mariana Curi" },
  { id: "carol-cardoso", name: "Carol Cardoso" },
  { id: "philip-fenton", name: "Philip Fenton" },
  { id: "efrem", name: "Efrem" },
  { id: "andre", name: "Andre" },
  { id: "nery", name: "Nery" },
  { id: "izabela", name: "Izabela" },
  { id: "vini-maia", name: "Vini Maia" },
  { id: "tairo", name: "Tairo" },
  { id: "carol", name: "Carol" },
  { id: "ale-pereira", name: "Alê Pereira" },
  { id: "salgadin", name: "Salgadin" },
  { id: "henrique", name: "Henrique" },
  { id: "karina", name: "Karina" },
  { id: "jessica", name: "Jessica" },
  { id: "fred", name: "Fred" },
  { id: "hamu", name: "Hamu" },
  { id: "iago", name: "Iago" },
  { id: "pilon", name: "Pilon" },
  { id: "marina", name: "Marina" },
  { id: "cloves", name: "Cloves" },
  { id: "thais-nakahira", name: "Thais Nakahira" },
  { id: "karina-sato", name: "Karina Sato" },
  { id: "lucas", name: "Lucas" },
  { id: "carlos-bronze", name: "Carlos Bronze" },
  { id: "isac", name: "Isac" },
  { id: "alexandre", name: "Alexandre" },
  { id: "alessandra", name: "Alessandra" },
  { id: "vinicius-alves", name: "Vinicius Alves" },
  { id: "bruno", name: "Bruno" },
  { id: "thiago-oliveira", name: "Thiago Oliveira" },
  { id: "ronaldo-leitao", name: "Ronaldo Leitão" },
  { id: "livia", name: "Lívia" },
  { id: "leandro-rocha", name: "Leandro Rocha" },
  { id: "fabio", name: "Fabio" },
  { id: "natascha", name: "Natascha" },
  { id: "arthur-guimaraes", name: "Arthur Guimarães" },
  { id: "bruno-perrone", name: "Bruno Perrone" },
  { id: "wilson", name: "Wilson" },
  { id: "vinicius", name: "Vinicius" },
  { id: "marina-coimbra", name: "Marina Coimbra" },
  { id: "luiza-muri", name: "Luiza Muri" },
  { id: "lari-souza", name: "Lari Souza" },
  { id: "rafael-leite", name: "Rafael Leite" },
  { id: "tatiane-vitorino", name: "Tatiane Vitorino" },
  { id: "jp", name: "JP" },
  { id: "rodrigo", name: "Rodrigo" },
  { id: "felipe-dias", name: "Felipe Dias" },
  { id: "eduardo-odon", name: "Eduardo Odon" },
  { id: "henrique-boz", name: "Henrique Boz" },
  { id: "marcos-magalhaes", name: "Marcos Magalhães" },
  { id: "agata-cristina", name: "Ágata Cristina" },
  { id: "pedro-motta", name: "Pedro Motta" },
  { id: "mateus", name: "Mateus" },
  { id: "marina-fernandes", name: "Marina Fernandes" },
  { id: "camila-meneghetti", name: "Camila Meneghetti" },
  { id: "bia-saito", name: "Bia Saito" },
  { id: "larissa-souza", name: "Larissa Souza" },
  { id: "izabela-oliveira", name: "Izabela Oliveira" },
  { id: "yasmin", name: "Yasmin" },
  { id: "michelli-chagas", name: "Michelli Chagas" },
  { id: "fabio-beico", name: "Fábio Beiço" },
  { id: "bruna", name: "Bruna" },
  { id: "juliana", name: "Juliana" },
  { id: "pri-chagas", name: "Pri Chagas" },
  { id: "amanda-farias", name: "Amanda Farias" },
  { id: "diego-silva", name: "Diego Silva" },
  { id: "lucas-furtado", name: "Lucas Furtado" },
  { id: "wilson-jr", name: "Wilson Jr" },
  { id: "thais", name: "Thais" },
  // Episode 103 contributors
  { id: "caiman", name: "Caiman" },
  { id: "iago-maciel", name: "Iago Maciel" },
  { id: "thiago-valinho", name: "Thiago Valinho" },
  { id: "vanessa-silva", name: "Vanessa Silva" },
  { id: "rodrigo-frumento", name: "Rodrigo Frumento" },
  { id: "senra", name: "Senra" },
  { id: "cristiano", name: "Cristiano" },
  { id: "marcos-roman", name: "Marcos Roman" },
  { id: "paula-paradellas", name: "Paula Paradellas" },
  { id: "nelson-moura", name: "Nelson de Moura" },
  { id: "diego-espinilo", name: "Diego Espinilo" },
];

// Mentions
export const mentions: Mention[] = [
  // Episode 65
  { id: "m65-1", episodeId: 65, personId: "aiquis", productId: "beerpass" },
  { id: "m65-2", episodeId: 65, personId: "arthur", productId: "copo-stanley" },
  { id: "m65-3", episodeId: 65, personId: "henrique-boz", productId: "google-maps" },
  { id: "m65-4", episodeId: 65, personId: "nana", productId: "mercado-bitcoin" },
  { id: "m65-5", episodeId: 65, personId: "amanda-farias", productId: "gymrats" },
  { id: "m65-6", episodeId: 65, personId: "efrem", productId: "napkin" },
  { id: "m65-7", episodeId: 65, personId: "diego-silva", productId: "tldv" },
  { id: "m65-8", episodeId: 65, personId: "lucas-furtado", productId: "n8n" },
  { id: "m65-9", episodeId: 65, personId: "bruna-fragelli", productId: "wanderlog" },
  { id: "m65-10", episodeId: 65, personId: "lucao", productId: "loteria" },
  { id: "m65-11", episodeId: 65, personId: "nery", productId: "notebooklm" },

  // Episode 66
  { id: "m66-1", episodeId: 66, personId: "arthur", productId: "zapier" },
  { id: "m66-2", episodeId: 66, personId: "arthur", productId: "chatgpt" },
  { id: "m66-3", episodeId: 66, personId: "aiquis", productId: "appletv-plus" },
  { id: "m66-4", episodeId: 66, personId: "marcos-lavin", productId: "fitness-plus" },
  { id: "m66-5", episodeId: 66, personId: "juliana", productId: "yazio" },
  { id: "m66-6", episodeId: 66, personId: "pri-chagas", productId: "chatgpt" },
  { id: "m66-7", episodeId: 66, personId: "leandro-coelho", productId: "streaks" },
  { id: "m66-8", episodeId: 66, personId: "brian", productId: "duolingo" },
  { id: "m66-9", episodeId: 66, personId: "danilera", productId: "parafuzo" },
  { id: "m66-10", episodeId: 66, personId: "glauco", productId: "personal-blender" },
  { id: "m66-11", episodeId: 66, personId: "andrezao", productId: "calculadora-ios18" },

  // Episode 67
  { id: "m67-1", episodeId: 67, personId: "aiquis", productId: "disney-plus" },
  { id: "m67-2", episodeId: 67, personId: "arthur", productId: "robozinho-kabum" },
  { id: "m67-3", episodeId: 67, personId: "lucao", productId: "dasa" },
  { id: "m67-4", episodeId: 67, personId: "eduardo-odon", productId: "obsidian" },
  { id: "m67-5", episodeId: 67, personId: "peixoto", productId: "zapier" },
  { id: "m67-6", episodeId: 67, personId: "caue", productId: "cam-studio" },
  { id: "m67-7", episodeId: 67, personId: "andrezao", productId: "capcut" },
  { id: "m67-8", episodeId: 67, personId: "nery", productId: "captions" },
  { id: "m67-9", episodeId: 67, personId: "mateus", productId: "duolingo" },

  // Episode 68
  { id: "m68-1", episodeId: 68, personId: "arthur", productId: "panificadora-mondial" },
  { id: "m68-2", episodeId: 68, personId: "aiquis", productId: "perplexity" },
  { id: "m68-3", episodeId: 68, personId: "aiquis", productId: "chatgpt-search" },
  { id: "m68-4", episodeId: 68, personId: "portinho", productId: "deepseek" },
  { id: "m68-5", episodeId: 68, personId: "peixoto", productId: "deepseek" },
  { id: "m68-6", episodeId: 68, personId: "kamilla-felix", productId: "obsidian" },
  { id: "m68-7", episodeId: 68, personId: "agata-cristina", productId: "skeelo" },
  { id: "m68-8", episodeId: 68, personId: "alexandre-pereira", productId: "canva" },
  { id: "m68-9", episodeId: 68, personId: "pedro-motta", productId: "calculadora-loft" },
  { id: "m68-10", episodeId: 68, personId: "thiago-oliveira", productId: "plaud" },
  { id: "m68-11", episodeId: 68, personId: "cloves", productId: "pixelfed" },
  { id: "m68-12", episodeId: 68, personId: "pilon", productId: "mercado-livre" },
  { id: "m68-13", episodeId: 68, personId: "nana", productId: "binance" },
  { id: "m68-14", episodeId: 68, personId: "mateus", productId: "acrobat-ai" },

  // Episode 69
  { id: "m69-1", episodeId: 69, personId: "aiquis", productId: "lovable" },
  { id: "m69-2", episodeId: 69, personId: "aiquis", productId: "claude" },
  { id: "m69-3", episodeId: 69, personId: "arthur", productId: "chatgpt-o3" },
  { id: "m69-4", episodeId: 69, personId: "marina-fernandes", productId: "porto-seguro" },
  { id: "m69-5", episodeId: 69, personId: "camila-meneghetti", productId: "deepseek" },
  { id: "m69-6", episodeId: 69, personId: "bia-saito", productId: "duolingo" },
  { id: "m69-7", episodeId: 69, personId: "bob", productId: "deepseek" },
  { id: "m69-8", episodeId: 69, personId: "larissa-souza", productId: "skoob" },
  { id: "m69-9", episodeId: 69, personId: "izabela-oliveira", productId: "tricount" },
  { id: "m69-10", episodeId: 69, personId: "yasmin", productId: "notion" },
  { id: "m69-11", episodeId: 69, personId: "glauco", productId: "waze" },
  { id: "m69-12", episodeId: 69, personId: "glauco", productId: "carteira-transito" },

  // Episode 70
  { id: "m70-1", episodeId: 70, personId: "arthur", productId: "whoop" },
  { id: "m70-2", episodeId: 70, personId: "aiquis", productId: "topspin-2k25" },
  { id: "m70-3", episodeId: 70, personId: "lucao", productId: "locker-ibira" },
  { id: "m70-4", episodeId: 70, personId: "novellino", productId: "bolt" },
  { id: "m70-5", episodeId: 70, personId: "silvinha", productId: "notion" },
  { id: "m70-6", episodeId: 70, personId: "mat", productId: "copilot-365" },
  { id: "m70-7", episodeId: 70, personId: "peixoto", productId: "lechat" },
  { id: "m70-8", episodeId: 70, personId: "glauco", productId: "uber-agendamento" },
  { id: "m70-9", episodeId: 70, personId: "tadeu", productId: "rentbrella" },
  { id: "m70-10", episodeId: 70, personId: "andrezao", productId: "hipercap-brasil" },

  // Episode 71
  { id: "m71-1", episodeId: 71, personId: "aiquis", productId: "booking" },
  { id: "m71-2", episodeId: 71, personId: "arthur", productId: "substack" },
  { id: "m71-3", episodeId: 71, personId: "bruna", productId: "klook" },
  { id: "m71-4", episodeId: 71, personId: "vanessa", productId: "waze" },
  { id: "m71-5", episodeId: 71, personId: "lucas-mattos", productId: "fanthom" },
  { id: "m71-6", episodeId: 71, personId: "hamu", productId: "supabase" },
  { id: "m71-7", episodeId: 71, personId: "caue", productId: "total-pass" },
  { id: "m71-8", episodeId: 71, personId: "felipe-dias", productId: "duolingo" },
  { id: "m71-9", episodeId: 71, personId: "bruna-fragelli", productId: "liti" },
  { id: "m71-10", episodeId: 71, personId: "glauco", productId: "oracle" },
  { id: "m71-11", episodeId: 71, personId: "mat", productId: "weed-maps" },
  { id: "m71-12", episodeId: 71, personId: "danilera", productId: "pixverse" },

  // Episode 72
  { id: "m72-1", episodeId: 72, personId: "arthur", productId: "perplexity" },
  { id: "m72-2", episodeId: 72, personId: "aiquis", productId: "lovable" },
  { id: "m72-3", episodeId: 72, personId: "rodrigo", productId: "coinmarket-cap" },
  { id: "m72-4", episodeId: 72, personId: "cloves", productId: "figma" },
  { id: "m72-5", episodeId: 72, personId: "glauco", productId: "tiktok" },
  { id: "m72-6", episodeId: 72, personId: "bruna", productId: "duolingo" },
  { id: "m72-7", episodeId: 72, personId: "vinicius", productId: "duolingo" },
  { id: "m72-8", episodeId: 72, personId: "felipe-dias", productId: "audible" },
  { id: "m72-9", episodeId: 72, personId: "andrezao", productId: "pixverse" },
  { id: "m72-10", episodeId: 72, personId: "lucas-mattos", productId: "grit" },

  // Episode 73
  { id: "m73-1", episodeId: 73, personId: "aiquis", productId: "perplexity" },
  { id: "m73-2", episodeId: 73, personId: "aiquis", productId: "openai" },
  { id: "m73-3", episodeId: 73, personId: "arthur", productId: "as-semanas-magicas" },
  { id: "m73-4", episodeId: 73, personId: "fabio-beico", productId: "focumon" },
  { id: "m73-5", episodeId: 73, personId: "felipe-dias", productId: "insight-timer" },
  { id: "m73-6", episodeId: 73, personId: "rafael-leite", productId: "mimo" },
  { id: "m73-7", episodeId: 73, personId: "tatiane-vitorino", productId: "whatsapp" },
  { id: "m73-8", episodeId: 73, personId: "danilera", productId: "cazetv" },
  { id: "m73-9", episodeId: 73, personId: "mat", productId: "apple-shortcut" },
  { id: "m73-10", episodeId: 73, personId: "jp", productId: "dola-ai" },
  { id: "m73-11", episodeId: 73, personId: "hamu", productId: "cereal-snowflake" },

  // Episode 74
  { id: "m74-1", episodeId: 74, personId: "arthur", productId: "replit" },
  { id: "m74-2", episodeId: 74, personId: "aiquis", productId: "logitech-mx-vertical" },
  { id: "m74-3", episodeId: 74, personId: "alexandre", productId: "lovable" },
  { id: "m74-4", episodeId: 74, personId: "portinho", productId: "perplexity" },
  { id: "m74-5", episodeId: 74, personId: "hamu", productId: "n8n" },
  { id: "m74-6", episodeId: 74, personId: "lucao", productId: "runstory" },
  { id: "m74-7", episodeId: 74, personId: "marina-fernandes", productId: "elephan" },
  { id: "m74-8", episodeId: 74, personId: "pilon", productId: "bluelink" },

  // Episode 75
  { id: "m75-1", episodeId: 75, personId: "aiquis", productId: "google-slides" },
  { id: "m75-2", episodeId: 75, personId: "arthur", productId: "waterminder" },
  { id: "m75-3", episodeId: 75, personId: "henrique-boz", productId: "kong-api" },
  { id: "m75-4", episodeId: 75, personId: "marcos-magalhaes", productId: "12min" },
  { id: "m75-5", episodeId: 75, personId: "karina-sato", productId: "headway" },
  { id: "m75-6", episodeId: 75, personId: "bruna", productId: "time-shifter" },
  { id: "m75-7", episodeId: 75, personId: "glauco", productId: "tag-sem-parar" },
  { id: "m75-8", episodeId: 75, personId: "hamu", productId: "suno-ai" },

  // Episode 76
  { id: "m76-1", episodeId: 76, personId: "arthur", productId: "sitly" },
  { id: "m76-2", episodeId: 76, personId: "aiquis", productId: "chatgpt-images" },
  { id: "m76-3", episodeId: 76, personId: "danilera", productId: "chatgpt-images" },
  { id: "m76-4", episodeId: 76, personId: "portinho", productId: "chatgpt-images" },
  { id: "m76-5", episodeId: 76, personId: "cloves", productId: "chrome" },
  { id: "m76-6", episodeId: 76, personId: "glauco", productId: "post-it" },
  { id: "m76-7", episodeId: 76, personId: "eduardo-odon", productId: "insight-timer" },
  { id: "m76-8", episodeId: 76, personId: "bruna", productId: "klook" },
  { id: "m76-9", episodeId: 76, personId: "fabio-beico", productId: "trainiac" },

  // Episode 77
  { id: "m77-1", episodeId: 77, personId: "aiquis", productId: "skyscanner" },
  { id: "m77-2", episodeId: 77, personId: "arthur", productId: "manus-ai" },
  { id: "m77-3", episodeId: 77, personId: "peixoto", productId: "manus-ai" },
  { id: "m77-4", episodeId: 77, personId: "kamilla-felix", productId: "manus-ai" },
  { id: "m77-5", episodeId: 77, personId: "vanessa", productId: "teams" },
  { id: "m77-6", episodeId: 77, personId: "thais", productId: "duolingo" },
  { id: "m77-7", episodeId: 77, personId: "fabio-beico", productId: "irpf2025" },
  { id: "m77-8", episodeId: 77, personId: "caue", productId: "smart-things-samsung" },
  { id: "m77-9", episodeId: 77, personId: "wilson-jr", productId: "training-peaks" },

  // Episode 78
  { id: "m78-1", episodeId: 78, personId: "arthur", productId: "zapier" },
  { id: "m78-2", episodeId: 78, personId: "aiquis", productId: "notebooklm" },
  { id: "m78-3", episodeId: 78, personId: "caue", productId: "zapier" },
  { id: "m78-4", episodeId: 78, personId: "rafael-valente", productId: "perplexity" },
  { id: "m78-5", episodeId: 78, personId: "cloves", productId: "firebase-studio" },
  { id: "m78-6", episodeId: 78, personId: "iza-godoy", productId: "wanderlog" },
  { id: "m78-7", episodeId: 78, personId: "brian", productId: "shazam" },
  { id: "m78-8", episodeId: 78, personId: "glauco", productId: "wellhub" },
  { id: "m78-9", episodeId: 78, personId: "nina", productId: "uno" },
  { id: "m78-10", episodeId: 78, personId: "pilon", productId: "bblend" },
  { id: "m78-11", episodeId: 78, personId: "wilson", productId: "strava" },
  { id: "m78-12", episodeId: 78, personId: "lucas", productId: "pagol" },
  { id: "m78-13", episodeId: 78, personId: "iago", productId: "mindstudio" },

  // Episode 79
  { id: "m79-1", episodeId: 79, personId: "aiquis", productId: "kayak-gpt" },
  { id: "m79-2", episodeId: 79, personId: "arthur", productId: "relay-app" },
  { id: "m79-3", episodeId: 79, personId: "luiza-muri", productId: "v0" },
  { id: "m79-4", episodeId: 79, personId: "carol-cardoso", productId: "max" },
  { id: "m79-5", episodeId: 79, personId: "andrezao", productId: "max" },
  { id: "m79-6", episodeId: 79, personId: "glauco", productId: "max" },
  { id: "m79-7", episodeId: 79, personId: "lari-souza", productId: "beep-saude" },
  { id: "m79-8", episodeId: 79, personId: "karina-sato", productId: "spotify" },
  { id: "m79-9", episodeId: 79, personId: "lucao", productId: "asics-house" },
  { id: "m79-10", episodeId: 79, personId: "pilon", productId: "wanderlog" },
  { id: "m79-11", episodeId: 79, personId: "danilera", productId: "gorila" },

  // Episode 80
  { id: "m80-1", episodeId: 80, personId: "arthur", productId: "elementor" },
  { id: "m80-2", episodeId: 80, personId: "aiquis", productId: "cursor" },
  { id: "m80-3", episodeId: 80, personId: "izabela", productId: "perplexity" },
  { id: "m80-4", episodeId: 80, personId: "brian", productId: "songsterr" },
  { id: "m80-5", episodeId: 80, personId: "andrezao", productId: "clair-obscur" },
  { id: "m80-6", episodeId: 80, personId: "matt-lopes", productId: "anyigo" },
  { id: "m80-7", episodeId: 80, personId: "cloves", productId: "linkedin" },
  { id: "m80-8", episodeId: 80, personId: "lucas-mattos", productId: "brilliant" },

  // Episode 81
  { id: "m81-1", episodeId: 81, personId: "aiquis", productId: "apollo" },
  { id: "m81-2", episodeId: 81, personId: "aiquis", productId: "moonlight" },
  { id: "m81-3", episodeId: 81, personId: "arthur", productId: "wisprflow" },
  { id: "m81-4", episodeId: 81, personId: "camila-jordana", productId: "teams" },
  { id: "m81-5", episodeId: 81, personId: "wilson", productId: "canva" },
  { id: "m81-6", episodeId: 81, personId: "brian", productId: "adobe-lightroom" },
  { id: "m81-7", episodeId: 81, personId: "andrezao", productId: "dominguinho" },
  { id: "m81-8", episodeId: 81, personId: "vinicius", productId: "n8n" },
  { id: "m81-9", episodeId: 81, personId: "glauco", productId: "uk-eta" },
  { id: "m81-10", episodeId: 81, personId: "lucas", productId: "bluma" },
  { id: "m81-11", episodeId: 81, personId: "pilon", productId: "v0" },
  { id: "m81-12", episodeId: 81, personId: "marina-coimbra", productId: "figma" },
  { id: "m81-13", episodeId: 81, personId: "leandro-coelho", productId: "strava" },

  // Episode 82
  { id: "m82-1", episodeId: 82, personId: "arthur", productId: "notebooklm" },
  { id: "m82-2", episodeId: 82, personId: "aiquis", productId: "irpf25" },
  { id: "m82-3", episodeId: 82, personId: "bruna", productId: "irpf25" },
  { id: "m82-4", episodeId: 82, personId: "paulo", productId: "irpf25" },
  { id: "m82-5", episodeId: 82, personId: "leandro-rocha", productId: "claude" },
  { id: "m82-6", episodeId: 82, personId: "hamu", productId: "claude" },
  { id: "m82-7", episodeId: 82, personId: "cloves", productId: "whatsapp" },
  { id: "m82-8", episodeId: 82, personId: "karina", productId: "ebay" },
  { id: "m82-9", episodeId: 82, personId: "fabio", productId: "pokeflix" },
  { id: "m82-10", episodeId: 82, personId: "brian", productId: "blablacar" },
  { id: "m82-11", episodeId: 82, personId: "nana", productId: "speechify" },
  { id: "m82-12", episodeId: 82, personId: "marina-coimbra", productId: "gemini" },
  { id: "m82-13", episodeId: 82, personId: "mat", productId: "chatgpt" },
  { id: "m82-14", episodeId: 82, personId: "tadeu", productId: "ultragas" },
  { id: "m82-15", episodeId: 82, personId: "natascha", productId: "testflight" },
  { id: "m82-16", episodeId: 82, personId: "henrique", productId: "windsurf" },
  { id: "m82-17", episodeId: 82, personId: "arthur-guimaraes", productId: "gameboy-advanced" },
  { id: "m82-18", episodeId: 82, personId: "bruno-perrone", productId: "google-docs" },

  // Episode 83
  { id: "m83-1", episodeId: 83, personId: "aiquis", productId: "smart-view-android" },
  { id: "m83-2", episodeId: 83, personId: "arthur", productId: "manus-ai" },
  { id: "m83-3", episodeId: 83, personId: "alessandra", productId: "perplexity" },
  { id: "m83-4", episodeId: 83, personId: "vinicius-alves", productId: "zapier" },
  { id: "m83-5", episodeId: 83, personId: "silvinha", productId: "etsy" },
  { id: "m83-6", episodeId: 83, personId: "karina", productId: "olx" },
  { id: "m83-7", episodeId: 83, personId: "bruno", productId: "gemini" },
  { id: "m83-8", episodeId: 83, personId: "carol-cardoso", productId: "gemini" },
  { id: "m83-9", episodeId: 83, personId: "thiago-oliveira", productId: "prypco-mint" },
  { id: "m83-10", episodeId: 83, personId: "ronaldo-leitao", productId: "raindrop" },
  { id: "m83-11", episodeId: 83, personId: "peixoto", productId: "api-facebook" },
  { id: "m83-12", episodeId: 83, personId: "brian", productId: "shazam" },
  { id: "m83-13", episodeId: 83, personId: "andrezao", productId: "patinete-jet" },
  { id: "m83-14", episodeId: 83, personId: "caue", productId: "opusclip" },
  { id: "m83-15", episodeId: 83, personId: "glauco", productId: "bradesco-seguros" },
  { id: "m83-16", episodeId: 83, personId: "livia", productId: "icasei" },
  { id: "m83-17", episodeId: 83, personId: "lucao", productId: "asics-superblast-2" },

  // Episode 84
  { id: "m84-1", episodeId: 84, personId: "arthur", productId: "riverside" },
  { id: "m84-2", episodeId: 84, personId: "aiquis", productId: "artigo-app" },
  { id: "m84-3", episodeId: 84, personId: "nina", productId: "bateria-moura" },
  { id: "m84-4", episodeId: 84, personId: "carlos-bronze", productId: "notion" },
  { id: "m84-5", episodeId: 84, personId: "silvinha", productId: "notion" },
  { id: "m84-6", episodeId: 84, personId: "novellino", productId: "firebase-studio" },
  { id: "m84-7", episodeId: 84, personId: "isac", productId: "pagaleve" },
  { id: "m84-8", episodeId: 84, personId: "paulo", productId: "magie" },
  { id: "m84-9", episodeId: 84, personId: "bruna", productId: "nintendo-switch-2" },
  { id: "m84-10", episodeId: 84, personId: "karina", productId: "top" },
  { id: "m84-11", episodeId: 84, personId: "fernanda", productId: "liti" },
  { id: "m84-12", episodeId: 84, personId: "alexandre", productId: "clickup" },
  { id: "m84-13", episodeId: 84, personId: "hamu", productId: "easypanel" },

  // Episode 85
  { id: "m85-1", episodeId: 85, personId: "aiquis", productId: "notebooklm" },
  { id: "m85-2", episodeId: 85, personId: "arthur", productId: "aquecedor-wap" },
  { id: "m85-3", episodeId: 85, personId: "hamu", productId: "cursor" },
  { id: "m85-4", episodeId: 85, personId: "iago", productId: "cursor" },
  { id: "m85-5", episodeId: 85, personId: "pilon", productId: "v0" },
  { id: "m85-6", episodeId: 85, personId: "marina", productId: "claude-opus-4" },
  { id: "m85-7", episodeId: 85, personId: "cloves", productId: "dia" },
  { id: "m85-8", episodeId: 85, personId: "lucao", productId: "veo3" },
  { id: "m85-9", episodeId: 85, personId: "thais-nakahira", productId: "timeline-sheets" },
  { id: "m85-10", episodeId: 85, personId: "karina-sato", productId: "vivino" },
  { id: "m85-11", episodeId: 85, personId: "caue", productId: "obs-studio" },
  { id: "m85-12", episodeId: 85, personId: "lucas", productId: "fleury" },
  { id: "m85-13", episodeId: 85, personId: "mat", productId: "u-haul" },

  // Episode 86
  { id: "m86-1", episodeId: 86, personId: "arthur", productId: "substack" },
  { id: "m86-2", episodeId: 86, personId: "aiquis", productId: "acquired-podcast" },
  { id: "m86-3", episodeId: 86, personId: "vini-maia", productId: "wisprflow" },
  { id: "m86-4", episodeId: 86, personId: "tairo", productId: "notebooklm" },
  { id: "m86-5", episodeId: 86, personId: "carol", productId: "gemini" },
  { id: "m86-6", episodeId: 86, personId: "bob", productId: "youtube" },
  { id: "m86-7", episodeId: 86, personId: "ale-pereira", productId: "abridor-vinho-eletrico" },
  { id: "m86-8", episodeId: 86, personId: "ale-pereira", productId: "perplexity-labs" },
  { id: "m86-9", episodeId: 86, personId: "andrezao", productId: "pedidos-ya" },
  { id: "m86-10", episodeId: 86, personId: "salgadin", productId: "turbi" },
  { id: "m86-11", episodeId: 86, personId: "lucas-mattos", productId: "turbi" },
  { id: "m86-12", episodeId: 86, personId: "henrique", productId: "capcut" },
  { id: "m86-13", episodeId: 86, personId: "daniel-gonzalez", productId: "windsurf" },
  { id: "m86-14", episodeId: 86, personId: "portinho", productId: "ifood" },
  { id: "m86-15", episodeId: 86, personId: "karina", productId: "event-tracker-aiquis" },
  { id: "m86-16", episodeId: 86, personId: "jessica", productId: "buffetmax" },
  { id: "m86-17", episodeId: 86, personId: "fred", productId: "camera-tapo" },

  // Episode 87
  { id: "m87-1", episodeId: 87, personId: "aiquis", productId: "anker-powerconf" },
  { id: "m87-2", episodeId: 87, personId: "arthur", productId: "n8n" },
  { id: "m87-3", episodeId: 87, personId: "brian", productId: "moises-ai" },
  { id: "m87-4", episodeId: 87, personId: "nina", productId: "tiktok" },
  { id: "m87-5", episodeId: 87, personId: "izabela", productId: "manus-ai" },
  { id: "m87-6", episodeId: 87, personId: "andrezao", productId: "buyticket" },
  { id: "m87-7", episodeId: 87, personId: "danilera", productId: "hotmart" },
  { id: "m87-8", episodeId: 87, personId: "mat", productId: "mfit-personal" },
  { id: "m87-9", episodeId: 87, personId: "nana", productId: "picnic" },
  { id: "m87-10", episodeId: 87, personId: "bob", productId: "minhas-financas" },
  { id: "m87-11", episodeId: 87, personId: "leandro", productId: "onesec" },

  // Episode 88
  { id: "m88-1", episodeId: 88, personId: "arthur", productId: "relay-app" },
  { id: "m88-2", episodeId: 88, personId: "aiquis", productId: "chatgpt" },
  { id: "m88-3", episodeId: 88, personId: "efrem", productId: "google-docs" },
  { id: "m88-4", episodeId: 88, personId: "nina", productId: "aquecedor-wap" },
  { id: "m88-5", episodeId: 88, personId: "andre", productId: "uber-black" },
  { id: "m88-6", episodeId: 88, personId: "nery", productId: "brasil-bitcoin" },
  { id: "m88-7", episodeId: 88, personId: "danilera", productId: "be-my-eyes" },
  { id: "m88-8", episodeId: 88, personId: "matt-lopes", productId: "polycam" },
  { id: "m88-9", episodeId: 88, personId: "portinho", productId: "manus-ai" },

  // Episode 89
  { id: "m89-1", episodeId: 89, personId: "aiquis", productId: "soundcore-q30" },
  { id: "m89-2", episodeId: 89, personId: "arthur", productId: "comet-perplexity" },
  { id: "m89-3", episodeId: 89, personId: "mariana-curi", productId: "whoop" },
  { id: "m89-4", episodeId: 89, personId: "jessica-luz", productId: "tela" },
  { id: "m89-5", episodeId: 89, personId: "carol-cardoso", productId: "prime-video" },
  { id: "m89-6", episodeId: 89, personId: "tadeu", productId: "shortcuts-ios" },
  { id: "m89-7", episodeId: 89, personId: "bob", productId: "tidal-hifi" },
  { id: "m89-8", episodeId: 89, personId: "philip-fenton", productId: "notebooklm" },

  // Episode 90
  { id: "m90-1", episodeId: 90, personId: "arthur", productId: "chatgpt" },
  { id: "m90-2", episodeId: 90, personId: "aiquis", productId: "chatgpt" },
  { id: "m90-3", episodeId: 90, personId: "rafael-valente", productId: "strava" },
  { id: "m90-4", episodeId: 90, personId: "amilker", productId: "kiwi" },
  { id: "m90-5", episodeId: 90, personId: "bruna-fragelli", productId: "viki" },
  { id: "m90-6", episodeId: 90, personId: "camila-jordana", productId: "relay-app" },
  { id: "m90-7", episodeId: 90, personId: "portinho", productId: "manus-ai" },
  { id: "m90-8", episodeId: 90, personId: "danilera", productId: "shopper" },
  { id: "m90-9", episodeId: 90, personId: "lucao", productId: "pexels" },

  // Episode 91
  { id: "m91-1", episodeId: 91, personId: "aiquis", productId: "xbox-series-s" },
  { id: "m91-2", episodeId: 91, personId: "arthur", productId: "capcut" },
  { id: "m91-3", episodeId: 91, personId: "fernanda", productId: "testflight" },
  { id: "m91-4", episodeId: 91, personId: "bruna-fragelli", productId: "airbnb" },
  { id: "m91-5", episodeId: 91, personId: "julia-patrocinio", productId: "duolingo" },
  { id: "m91-6", episodeId: 91, personId: "caue", productId: "bolt" },
  { id: "m91-7", episodeId: 91, personId: "lucao", productId: "alien-earth" },
  { id: "m91-8", episodeId: 91, personId: "leandro", productId: "zapier" },

  // Episode 92
  { id: "m92-1", episodeId: 92, personId: "arthur", productId: "chatgpt" },
  { id: "m92-2", episodeId: 92, personId: "aiquis", productId: "clair-obscur" },
  { id: "m92-3", episodeId: 92, personId: "nina", productId: "notebooklm" },
  { id: "m92-4", episodeId: 92, personId: "camila-ruas", productId: "chatgpt" },
  { id: "m92-5", episodeId: 92, personId: "arthur-magalhaes", productId: "strava" },
  { id: "m92-6", episodeId: 92, personId: "bob", productId: "gravador-voz" },
  { id: "m92-7", episodeId: 92, personId: "kamilla-felix", productId: "tldv" },
  { id: "m92-8", episodeId: 92, personId: "rafael-ferreira", productId: "lovable" },
  { id: "m92-9", episodeId: 92, personId: "glauco", productId: "bicicleta-equilibrio" },
  { id: "m92-10", episodeId: 92, personId: "paulo", productId: "globoplay" },

  // Episode 93
  { id: "m93-1", episodeId: 93, personId: "aiquis", productId: "pao-queijo-3reis" },
  { id: "m93-2", episodeId: 93, personId: "arthur", productId: "whoop" },
  { id: "m93-3", episodeId: 93, personId: "vanessa", productId: "samsung-watch-ultra" },
  { id: "m93-4", episodeId: 93, personId: "horacio", productId: "figma" },
  { id: "m93-5", episodeId: 93, personId: "danilera", productId: "raizs" },
  { id: "m93-6", episodeId: 93, personId: "lucao", productId: "barrinha-pistache-bold" },
  { id: "m93-7", episodeId: 93, personId: "glauco", productId: "picpay" },
  { id: "m93-8", episodeId: 93, personId: "mat", productId: "wise" },
  { id: "m93-9", episodeId: 93, personId: "silvinha", productId: "notion" },
  { id: "m93-10", episodeId: 93, personId: "paulo", productId: "replit" },

  // Episode 94
  { id: "m94-1", episodeId: 94, personId: "aiquis", productId: "hollow-knight-silksong" },

  // Episode 95
  { id: "m95-1", episodeId: 95, personId: "aiquis", productId: "claude-code-chatgpt" },
  { id: "m95-2", episodeId: 95, personId: "arthur", productId: "chatgpt-projects" },
  { id: "m95-3", episodeId: 95, personId: "bruna-fragelli", productId: "splitwise" },
  { id: "m95-4", episodeId: 95, personId: "fabio-beico", productId: "carplay" },
  { id: "m95-5", episodeId: 95, personId: "victor-nery", productId: "c6" },
  { id: "m95-6", episodeId: 95, personId: "lucas-mattos", productId: "apple-shortcut" },
  { id: "m95-7", episodeId: 95, personId: "glauco", productId: "trela" },

  // Episode 96
  { id: "m96-1", episodeId: 96, personId: "arthur", productId: "claude-sonnet-45" },
  { id: "m96-2", episodeId: 96, personId: "aiquis", productId: "lovable" },
  { id: "m96-3", episodeId: 96, personId: "leandro-coelho", productId: "google-maps" },
  { id: "m96-4", episodeId: 96, personId: "camila-jordana", productId: "maze" },
  { id: "m96-5", episodeId: 96, personId: "camila-jordana", productId: "filtro-cafe-inox" },
  { id: "m96-6", episodeId: 96, personId: "caue", productId: "hevy" },
  { id: "m96-7", episodeId: 96, personId: "julia-patrocinio", productId: "super-app-galo" },
  { id: "m96-8", episodeId: 96, personId: "portinho", productId: "tiggo-7" },
  { id: "m96-9", episodeId: 96, personId: "bruna-fragelli", productId: "curso-ia-nocode" },
  { id: "m96-10", episodeId: 96, personId: "brian", productId: "samsung-wearable" },
  { id: "m96-11", episodeId: 96, personId: "iza-godoy", productId: "soundcore-q30" },
  { id: "m96-12", episodeId: 96, personId: "michelli-chagas", productId: "chatgpt" },
  { id: "m96-13", episodeId: 96, personId: "carlos-bronze", productId: "boosteroid" },

  // Episode 97
  { id: "m97-1", episodeId: 97, personId: "aiquis", productId: "uber-livelo" },
  { id: "m97-2", episodeId: 97, personId: "welington-souza", productId: "notebooklm" },

  // Episode 98
  { id: "m98-1", episodeId: 98, personId: "aiquis", productId: "warp" },
  { id: "m98-2", episodeId: 98, personId: "arthur", productId: "picnic" },
  { id: "m98-3", episodeId: 98, personId: "fabin", productId: "pokemon-legends" },
  { id: "m98-4", episodeId: 98, personId: "andre-menezes", productId: "ghost" },
  { id: "m98-5", episodeId: 98, personId: "glauco", productId: "allianz-seguros" },
  { id: "m98-6", episodeId: 98, personId: "caue", productId: "wisprflow" },
  { id: "m98-7", episodeId: 98, personId: "lucas-mattos", productId: "poke" },
  { id: "m98-8", episodeId: 98, personId: "vanessa", productId: "figma-make" },
  { id: "m98-9", episodeId: 98, personId: "walmir", productId: "afya-receita-pro" },
  { id: "m98-10", episodeId: 98, personId: "nana", productId: "picnic" },
  { id: "m98-11", episodeId: 98, personId: "tadeu", productId: "codex-openai" },
  { id: "m98-12", episodeId: 98, personId: "silvinha", productId: "mlabs" },
  { id: "m98-13", episodeId: 98, personId: "peixoto", productId: "replit" },
  { id: "m98-14", episodeId: 98, personId: "lucas", productId: "hidrogel" },

  // Episode 99
  { id: "m99-1", episodeId: 99, personId: "arthur", productId: "atlas" },
  { id: "m99-2", episodeId: 99, personId: "aiquis", productId: "kindle" },
  { id: "m99-3", episodeId: 99, personId: "neves", productId: "mymind" },
  { id: "m99-4", episodeId: 99, personId: "alana", productId: "frigideira-antiaderente" },
  { id: "m99-5", episodeId: 99, personId: "jessica-luz", productId: "home-planner" },
  { id: "m99-6", episodeId: 99, personId: "iza-godoy", productId: "claude" },
  { id: "m99-7", episodeId: 99, personId: "ronald-falcao", productId: "ollama" },
  { id: "m99-8", episodeId: 99, personId: "arthur-azevedo", productId: "tiktok" },
  { id: "m99-9", episodeId: 99, personId: "alana", productId: "chatgpt" },
  { id: "m99-10", episodeId: 99, personId: "thiago-sturmer", productId: "glean" },
  { id: "m99-11", episodeId: 99, personId: "julia-patrocinio", productId: "linkedin" },
  { id: "m99-12", episodeId: 99, personId: "lucas-lima", productId: "google-ai-studio" },
  { id: "m99-13", episodeId: 99, personId: "vinicius-maricato", productId: "notebooklm" },
  { id: "m99-14", episodeId: 99, personId: "huxley", productId: "cursor" },
  { id: "m99-15", episodeId: 99, personId: "filipe-barros", productId: "claude" },
  {
    id: "m99-16",
    episodeId: 99,
    personId: "marina-moreira",
    productId: "n8n",
    context: "n8n + Vertex API testando automações de vídeo com o Veo 3.1",
  },

  // Episode 101
  { id: "m101-1", episodeId: 101, personId: "daniel-gonzalez", productId: "bolt" },
  { id: "m101-2", episodeId: 101, personId: "thiago-simao", productId: "lovable" },
  {
    id: "m101-3",
    episodeId: 101,
    personId: "iona-oliveira",
    productId: "wisprflow",
    context: "Uso para interação com Claude Code",
  },
  { id: "m101-4", episodeId: 101, personId: "walmir", productId: "make" },
  { id: "m101-5", episodeId: 101, personId: "ronald-falcao", productId: "n8n" },
  { id: "m101-6", episodeId: 101, personId: "ronald-falcao", productId: "agua", context: "Calor intenso" },
  {
    id: "m101-7",
    episodeId: 101,
    personId: "wilson-moraes",
    productId: "strava",
    context: "Atenção ao Quitter's Day em 19 de janeiro",
  },
  { id: "m101-8", episodeId: 101, personId: "portinho", productId: "gemini", context: "Cancelou assinatura ChatGPT" },
  {
    id: "m101-9",
    episodeId: 101,
    personId: "vanessa",
    productId: "99",
    context: "Novo código de segurança ao chegar no carro",
  },
  { id: "m101-10", episodeId: 101, personId: "novellino", productId: "amplitude" },
  { id: "m101-11", episodeId: 101, personId: "glauco", productId: "airbnb" },
  { id: "m101-12", episodeId: 101, personId: "lucao", productId: "twitter" },
  { id: "m101-13", episodeId: 101, personId: "matt-lopes", productId: "loom" },
  { id: "m101-14", episodeId: 101, personId: "andrezao", productId: "vocabulary" },
  { id: "m101-15", episodeId: 101, personId: "aiquis", productId: "art-science-engineering" },
  { id: "m101-16", episodeId: 101, personId: "arthur", productId: "spa-inflavel-intex" },

  // Episode 102
  { id: "m102-1", episodeId: 102, personId: "arthur", productId: "replit" },
  { id: "m102-2", episodeId: 102, personId: "aiquis", productId: "hevy" },
  { id: "m102-3", episodeId: 102, personId: "beatriz-morales", productId: "gymrats" },
  { id: "m102-4", episodeId: 102, personId: "patricia-zago", productId: "gymrats" },
  { id: "m102-5", episodeId: 102, personId: "tadeu", productId: "strava" },
  { id: "m102-6", episodeId: 102, personId: "juliana-lisboa", productId: "bike-spinning" },
  { id: "m102-7", episodeId: 102, personId: "alexandre-pereira", productId: "gemini" },
  { id: "m102-8", episodeId: 102, personId: "beatriz-fazolo", productId: "gemini" },
  { id: "m102-9", episodeId: 102, personId: "ronald-falcao", productId: "gemini" },
  { id: "m102-10", episodeId: 102, personId: "soraya", productId: "gemini" },
  { id: "m102-11", episodeId: 102, personId: "danilo-penteado", productId: "notebooklm" },
  { id: "m102-12", episodeId: 102, personId: "cassi-vilvert", productId: "google-docs" },
  { id: "m102-13", episodeId: 102, personId: "junior-magalhaes", productId: "google-ai-studio" },
  { id: "m102-14", episodeId: 102, personId: "amanda-couto", productId: "google-ai-studio" },
  { id: "m102-15", episodeId: 102, personId: "mateus-carvalho", productId: "antigravity" },
  { id: "m102-16", episodeId: 102, personId: "thiago-ep102", productId: "antigravity" },
  { id: "m102-17", episodeId: 102, personId: "raiana-santos", productId: "youtube" },
  { id: "m102-18", episodeId: 102, personId: "marcella-paiva", productId: "youtube" },
  { id: "m102-19", episodeId: 102, personId: "daniel-gonzalez", productId: "replit" },
  { id: "m102-20", episodeId: 102, personId: "huxley", productId: "cursor" },
  { id: "m102-21", episodeId: 102, personId: "carlos-henrique", productId: "cursor" },
  { id: "m102-22", episodeId: 102, personId: "joca", productId: "elevenlabs" },
  { id: "m102-23", episodeId: 102, personId: "marcos-lavin", productId: "chatgpt" },
  { id: "m102-24", episodeId: 102, personId: "marcos-lavin", productId: "notion-ai" },
  { id: "m102-25", episodeId: 102, personId: "peixoto", productId: "lovable" },
  { id: "m102-26", episodeId: 102, personId: "marcel-amiach", productId: "wisprflow" },
  { id: "m102-27", episodeId: 102, personId: "marcel-amiach", productId: "claude-code" },
  { id: "m102-28", episodeId: 102, personId: "nivaldo", productId: "opal" },
  { id: "m102-29", episodeId: 102, personId: "junior-magalhaes", productId: "claude-code" },
  { id: "m102-30", episodeId: 102, personId: "thays-bueno", productId: "databricks" },
  { id: "m102-31", episodeId: 102, personId: "marilia-rosa", productId: "teams" },
  { id: "m102-32", episodeId: 102, personId: "thiago-nascimento", productId: "huxe" },
  { id: "m102-33", episodeId: 102, personId: "marcelo", productId: "ze-delivery" },
  { id: "m102-34", episodeId: 102, personId: "lainy-moraes", productId: "kindle" },
  { id: "m102-35", episodeId: 102, personId: "benevides", productId: "caderno" },
  { id: "m102-36", episodeId: 102, personId: "tammy-senra", productId: "duolingo" },
  { id: "m102-37", episodeId: 102, personId: "amanda-couto", productId: "ipod-fake" },
  { id: "m102-38", episodeId: 102, personId: "bolivar", productId: "camisa-preta" },

  // Episode 103
  { id: "m103-1", episodeId: 103, personId: "aiquis", productId: "duo-gourmet" },
  { id: "m103-2", episodeId: 103, personId: "arthur", productId: "massageador-pescoco" },
  { id: "m103-3", episodeId: 103, personId: "caiman", productId: "manus-ai" },
  { id: "m103-4", episodeId: 103, personId: "iago-maciel", productId: "cloud-cowork" },
  { id: "m103-5", episodeId: 103, personId: "thiago-valinho", productId: "gemini" },
  { id: "m103-6", episodeId: 103, personId: "thiago-valinho", productId: "gchat" },
  { id: "m103-7", episodeId: 103, personId: "thiago-valinho", productId: "canvas" },
  { id: "m103-8", episodeId: 103, personId: "beatriz-morales", productId: "bilhete-unico" },
  { id: "m103-9", episodeId: 103, personId: "vanessa-silva", productId: "chatgpt" },
  { id: "m103-10", episodeId: 103, personId: "vanessa-silva", productId: "copilot-365" },
  { id: "m103-11", episodeId: 103, personId: "amanda-couto", productId: "chatgpt" },
  { id: "m103-12", episodeId: 103, personId: "amanda-couto", productId: "gemini" },
  { id: "m103-13", episodeId: 103, personId: "rodrigo-frumento", productId: "chatgpt" },
  { id: "m103-14", episodeId: 103, personId: "rodrigo-frumento", productId: "jira" },
  { id: "m103-15", episodeId: 103, personId: "rodrigo-frumento", productId: "chatprd" },
  { id: "m103-16", episodeId: 103, personId: "senra", productId: "power-automate" },
  { id: "m103-17", episodeId: 103, personId: "carlos-bronze", productId: "cursor" },
  { id: "m103-18", episodeId: 103, personId: "carlos-bronze", productId: "lovable" },
  { id: "m103-19", episodeId: 103, personId: "cristiano", productId: "app-fgc" },
  { id: "m103-20", episodeId: 103, personId: "marcos-roman", productId: "isla" },
  { id: "m103-21", episodeId: 103, personId: "marcos-roman", productId: "lovable" },
  { id: "m103-22", episodeId: 103, personId: "paula-paradellas", productId: "substack" },
  { id: "m103-23", episodeId: 103, personId: "beatriz-fazolo", productId: "buy-tickets" },
  { id: "m103-24", episodeId: 103, personId: "nelson-moura", productId: "cursor" },
  { id: "m103-25", episodeId: 103, personId: "nelson-moura", productId: "antigravity" },
  { id: "m103-26", episodeId: 103, personId: "diego-espinilo", productId: "antigravity" },
  { id: "m103-27", episodeId: 103, personId: "amilker", productId: "google-script" },
  { id: "m103-28", episodeId: 103, personId: "amilker", productId: "notebooklm" },
  { id: "m103-29", episodeId: 103, personId: "bob", productId: "tidal-hifi" },
  { id: "m103-30", episodeId: 103, personId: "peixoto", productId: "lovable" },
];

// Helper functions
export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getChildProducts(parentId: string): Product[] {
  return products.filter((p) => p.parentId === parentId);
}

export function getPersonById(id: string): Person | undefined {
  return people.find((p) => p.id === id);
}

export function getEpisodeById(id: number): Episode | undefined {
  return episodes.find((e) => e.id === id);
}

export function getMentionsByProduct(productId: string): Mention[] {
  // Get direct mentions
  const directMentions = mentions.filter((m) => m.productId === productId);

  // Get mentions from child products (parentId pointing to this product)
  const childProducts = products.filter((p) => p.parentId === productId);
  const childMentions = mentions.filter((m) => childProducts.some((child) => child.id === m.productId));

  // Get mentions from combo products (alsoCredits including this product)
  const comboProducts = products.filter((p) => p.alsoCredits?.includes(productId));
  const comboMentions = mentions.filter((m) => comboProducts.some((combo) => combo.id === m.productId));

  // Combine and dedupe by mention id
  const allMentions = [...directMentions, ...childMentions, ...comboMentions];
  return [...new Map(allMentions.map((m) => [m.id, m])).values()];
}

export function getMentionsByPerson(personId: string): Mention[] {
  return mentions.filter((m) => m.personId === personId);
}

export function getMentionsByEpisode(episodeId: number): Mention[] {
  return mentions.filter((m) => m.episodeId === episodeId);
}

export function getProductMentionCount(productId: string): number {
  return getMentionsByProduct(productId).length;
}

export function getPersonMentionCount(personId: string): number {
  return mentions.filter((m) => m.personId === personId).length;
}

export function getTopProducts(limit: number = 10): { product: Product; count: number }[] {
  // Only consider "main" products (no parentId) to avoid double-counting
  const mainProducts = products.filter((p) => !p.parentId);

  return mainProducts
    .map((product) => ({
      product,
      count: getMentionsByProduct(product.id).length,
    }))
    .filter((item) => item.count > 0)
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

export function getEpisodeYears(): number[] {
  const years = episodes.map((e) => new Date(e.date).getFullYear());
  return [...new Set(years)].sort((a, b) => b - a);
}

export function getEpisodesByYear(year: number | "all"): Episode[] {
  if (year === "all") return episodes;
  return episodes.filter((e) => new Date(e.date).getFullYear() === year);
}

export function getTopProductsMentionsOverTime(limit: number = 10): Record<string, any>[] {
  const topProducts = getTopProducts(limit);

  // Initialize cumulative counters for each product
  const cumulativeCounts: Record<string, number> = {};
  topProducts.forEach(({ product }) => {
    cumulativeCounts[product.id] = 0;
  });

  return episodes
    .slice()
    .sort((a, b) => a.id - b.id)
    .map((episode) => {
      const dataPoint: Record<string, any> = {
        episode: `Ep ${episode.id}`,
        episodeId: episode.id,
      };

      topProducts.forEach(({ product }) => {
        // Count mentions for this episode (includes variants and combos)
        const productMentions = getMentionsByProduct(product.id);
        const count = productMentions.filter((m) => m.episodeId === episode.id).length;

        // Add to cumulative total
        cumulativeCounts[product.id] += count;

        // Store cumulative value
        dataPoint[product.name] = cumulativeCounts[product.id];
      });

      return dataPoint;
    });
}

export function getCategoryMentionsOverTime(limit: number = 8): Record<string, any>[] {
  // Get all categories with their mention counts
  const allCategories = getCategories();
  const categoryTotals = allCategories
    .map((category) => {
      const categoryProducts = getProductsByCategory(category).filter((p) => !p.parentId && !p.alsoCredits);
      const mentionCount = categoryProducts.reduce((sum, p) => sum + getMentionsByProduct(p.id).length, 0);
      return { name: category, count: mentionCount };
    })
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);

  // Initialize cumulative counters
  const cumulativeCounts: Record<string, number> = {};
  categoryTotals.forEach(({ name }) => {
    cumulativeCounts[name] = 0;
  });

  // Build data points for each episode
  const sortedEpisodes = episodes.slice().sort((a, b) => a.id - b.id);

  return sortedEpisodes.map((episode) => {
    const dataPoint: Record<string, any> = {
      episode: `Ep ${episode.id}`,
      episodeId: episode.id,
    };

    categoryTotals.forEach(({ name }) => {
      const categoryProducts = getProductsByCategory(name).filter((p) => !p.parentId && !p.alsoCredits);
      const count = mentions.filter(
        (m) => m.episodeId === episode.id && categoryProducts.some((p) => p.id === m.productId),
      ).length;

      cumulativeCounts[name] += count;
      dataPoint[name] = cumulativeCounts[name];
    });

    return dataPoint;
  });
}

export function getTopCategoryNames(limit: number = 8): string[] {
  const allCategories = getCategories();
  return allCategories
    .map((category) => {
      const categoryProducts = getProductsByCategory(category).filter((p) => !p.parentId && !p.alsoCredits);
      const mentionCount = categoryProducts.reduce((sum, p) => sum + getMentionsByProduct(p.id).length, 0);
      return { name: category, count: mentionCount };
    })
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, limit)
    .map((c) => c.name);
}
