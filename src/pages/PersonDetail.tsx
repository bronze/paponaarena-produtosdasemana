import { useParams, Link, useNavigate } from "react-router-dom";
import { useRef, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, MessageSquare, Mic, Package, Linkedin } from "lucide-react";

import arthurAudio from "@/assets/audio/audio-arthur.mp3";
import aquisAudio from "@/assets/audio/audio-aiquis.mp3";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

import {
  getPersonById,
  getMentionsByPerson,
  getPersonTopProducts,
  getProductById,
  getEpisodeById,
  getProductLinkId,
} from "@/data/mentions";

const COLORS = ["hsl(140 20% 40%)", "hsl(18 50% 55%)", "hsl(45 40% 55%)", "hsl(200 25% 50%)", "hsl(340 30% 55%)"];

export default function PersonDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const person = getPersonById(id || "");
  const mentions = getMentionsByPerson(id || "");

  const audioRef = useRef<HTMLAudioElement | null>(null);

  /*
    src estável
    evita recriar <audio> a cada render
  */
  const audioSrc = useMemo(() => {
    if (person?.id === "arthur") return arthurAudio;
    if (person?.id === "aiquis") return aquisAudio;
    return null;
  }, [person?.id]);

  /*
    play determinístico mobile-safe
  */
  const playSound = () => {
    const audio = audioRef.current;
    if (!audio || !audioSrc) return;

    audio.pause();
    audio.currentTime = 0;

    const p = audio.play();
    if (p) p.catch(() => {});
  };

  if (!person) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <p className="text-muted-foreground">Person not found</p>
        <Button asChild variant="link" className="mt-4">
          <Link to="/people">Back to People</Link>
        </Button>
      </div>
    );
  }

  const topProducts = getPersonTopProducts(person.id, 10);

  const chartData = topProducts.map((item) => {
    const productMentions = mentions.filter((m) => m.productId === item.product.id);

    const episodeNumbers = [...new Set(productMentions.map((m) => m.episodeId))].sort((a, b) => b - a);

    return {
      id: item.product.id,
      name: item.product.name,
      mentions: item.count,
      episodes: episodeNumbers,
    };
  });

  const episodeIds = [...new Set(mentions.map((m) => m.episodeId))];
  const productIds = [...new Set(mentions.map((m) => m.productId))];

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: Array<{ payload: { name: string; mentions: number; episodes: number[] } }>;
  }) => {
    if (!active || !payload?.length) return null;

    const data = payload[0].payload;

    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg max-w-xs">
        <p className="font-semibold text-foreground">{data.name}</p>
        <p className="text-sm text-muted-foreground">{data.mentions} mentions</p>

        <div className="mt-2 pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground mb-1">Episodes:</p>
          <div className="flex flex-wrap gap-1">
            {data.episodes.slice(0, 8).map((ep: number) => (
              <span key={ep} className="text-xs bg-muted px-1.5 py-0.5 rounded">
                Ep {ep}
              </span>
            ))}
            {data.episodes.length > 8 && (
              <span className="text-xs text-muted-foreground">+{data.episodes.length - 8} more</span>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* áudio único persistente */}
      <audio ref={audioRef} src={audioSrc ?? undefined} preload="auto" playsInline />

      {/* Header */}
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="icon">
          <Link to="/people">
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </Button>

        <div className="flex items-center gap-4">
          <Avatar
            className={`w-14 h-14 bg-primary/10 select-none active:scale-95 transition-transform ${
              audioSrc ? "cursor-pointer" : ""
            }`}
            onPointerUp={playSound}
            style={{ touchAction: "manipulation" }}
          >
            {person.avatarUrl && <AvatarImage src={person.avatarUrl} alt={person.name} />}
            <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
              {getInitials(person.name)}
            </AvatarFallback>
          </Avatar>

          <div>
            <h1 className="text-2xl font-bold text-foreground">{person.name}</h1>

            <p className="text-muted-foreground">Contributor analytics</p>

            {person.linkedinUrl && (
              <a
                href={person.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 text-blue-600 hover:underline"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <MessageSquare className="w-5 h-5" />
            <span>{mentions.length} Mentions</span>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <Package className="w-5 h-5" />
            <span>{productIds.length} Products</span>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center gap-4">
            <Mic className="w-5 h-5" />
            <span>{episodeIds.length} Episodes</span>
          </CardContent>
        </Card>
      </div>

      {/* Charts + Mentions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Most Mentioned Products</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical">
                  <XAxis type="number" />
                  <YAxis type="category" dataKey="name" width={120} />
                  <Tooltip content={<CustomTooltip />} />

                  <Bar
                    dataKey="mentions"
                    cursor="pointer"
                    onClick={(data) => {
                      if (data?.id) navigate(`/products/${getProductLinkId(data.id)}`);
                    }}
                  >
                    {chartData.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* All Mentions */}
        <Card>
          <CardHeader>
            <CardTitle>All Mentions</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-3 max-h-[280px] overflow-auto">
              {[...mentions]
                .sort((a, b) => b.episodeId - a.episodeId)
                .map((mention) => {
                  const product = getProductById(mention.productId);
                  const episode = getEpisodeById(mention.episodeId);
                  if (!product || !episode) return null;

                  return (
                    <div key={mention.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <Link to={`/products/${getProductLinkId(product.id)}`} className="font-medium hover:text-primary">
                        {product.name}
                      </Link>

                      <Link to={`/episodes/${episode.id}`}>
                        <Badge variant="outline">Ep {episode.id}</Badge>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
