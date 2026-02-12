import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MessageSquare, Youtube, Music } from "lucide-react";
import { formatEpisodeDate } from "@/lib/utils";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, TooltipProps } from "recharts";
import {
  getEpisodeById,
  getMentionsByEpisode,
  getProductById,
  getPersonById,
  getProductLinkId,
  YOUTUBE_PLAYLIST_SUFFIX,
} from "@/data/mentions";

const COLORS = [
  "hsl(140 20% 40%)",
  "hsl(18 50% 55%)",
  "hsl(45 40% 55%)",
  "hsl(200 25% 50%)",
  "hsl(340 30% 55%)",
];

const TOOLTIP_STYLE = {
  backgroundColor: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

export default function EpisodeDetail() {
  const { id } = useParams<{ id: string }>();
  const episodeId = parseInt(id || "1", 10);
  const episode = getEpisodeById(episodeId);
  const mentions = getMentionsByEpisode(episodeId);

  if (!episode) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <p className="text-muted-foreground">Episode not found</p>
        <Button asChild variant="link" className="mt-4">
          <Link to="/episodes">Back to Episodes</Link>
        </Button>
      </div>
    );
  }

  // Calculate product counts for this episode
  const productCounts = new Map<string, number>();
  mentions.forEach((m) => {
    productCounts.set(m.productId, (productCounts.get(m.productId) || 0) + 1);
  });

  const navigate = useNavigate();

  const chartData = Array.from(productCounts.entries())
    .map(([productId, count]) => ({
      productId,
      name: getProductById(productId)?.name || productId,
      mentions: count,
    }))
    .sort((a, b) => b.mentions - a.mentions)
    .slice(0, 10);

  // Group mentions by person
  const mentionsByPerson = new Map<string, typeof mentions>();
  mentions.forEach((m) => {
    const existing = mentionsByPerson.get(m.personId) || [];
    mentionsByPerson.set(m.personId, [...existing, m]);
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="icon">
          <Link to="/episodes">
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Ep. {episode.id}: {episode.title}
          </h1>
          <div className="flex flex-col gap-2 mt-1">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {formatEpisodeDate(episode.date)}
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MessageSquare className="w-4 h-4" />
                {mentions.length} mentions
              </div>
            </div>
            <div className="flex items-center gap-2">
              {episode.youtubeLink && (
                <a
                  href={`${episode.youtubeLink}${YOUTUBE_PLAYLIST_SUFFIX}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md border border-red-500/30 text-red-600 hover:bg-red-500/10 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                  YouTube
                </a>
              )}
              {episode.spotifyLink && (
                <a
                  href={episode.spotifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md border border-green-500/30 text-green-600 hover:bg-green-500/10 transition-colors"
                >
                  <Music className="w-4 h-4" />
                  Spotify
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="text-muted-foreground">{episode.description}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Products Chart */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">Products Mentioned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical" margin={{ left: 0, right: 20 }}>
                  <XAxis type="number" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
                  <YAxis
                    type="category"
                    dataKey="name"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fontSize: 12 }}
                    width={100}
                  />
                  <Tooltip contentStyle={TOOLTIP_STYLE} cursor={{ fill: 'hsl(var(--muted))' }} />
                  <Bar
                    dataKey="mentions"
                    radius={[0, 4, 4, 0]}
                    cursor="pointer"
                    onClick={(data) => {
                      if (data?.productId) {
                        navigate(`/products/${getProductLinkId(data.productId)}`);
                      }
                    }}
                  >
                    {chartData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Mentions by Person */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">Mentions by Person</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-[300px] overflow-auto">
              {Array.from(mentionsByPerson.entries())
                .sort(([personIdA], [personIdB]) => {
                  const aName = getPersonById(personIdA)?.name || "";
                  const bName = getPersonById(personIdB)?.name || "";
                  return aName.localeCompare(bName);
                })
                .map(([personId, personMentions]) => {
                  const person = getPersonById(personId);
                  if (!person) return null;

                  return (
                    <div
                      key={personId}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                    >
                      <div className="flex items-center gap-3 flex-wrap">
                        <Link
                          to={`/people/${personId}`}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {person.name}
                        </Link>
                        <div className="flex items-center gap-2 flex-wrap">
                          {personMentions.map((mention) => {
                            const product = getProductById(mention.productId);
                            if (!product) return null;

                            // Combo product: show individual links + combo badge
                            if (product.alsoCredits) {
                              return (
                                <div key={mention.id} className="flex items-center gap-1">
                                  {product.alsoCredits.map((creditedId, idx) => {
                                    const creditedProduct = getProductById(creditedId);
                                    if (!creditedProduct) return null;
                                    return (
                                      <span key={creditedId} className="flex items-center gap-1">
                                        {idx > 0 && <span className="text-muted-foreground text-xs">+</span>}
                                    <Link to={`/products/${getProductLinkId(creditedProduct.id)}`}>
                                      <Badge
                                        variant="secondary"
                                        className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer text-xs"
                                      >
                                        {creditedProduct.name}
                                      </Badge>
                                    </Link>
                                      </span>
                                    );
                                  })}
                                  <Badge variant="outline" className="text-xs bg-primary/10 text-primary/70 border-primary/20">combo</Badge>
                                </div>
                              );
                            }

                            // Regular product
                            return (
                              <Link key={mention.id} to={`/products/${getProductLinkId(mention.productId)}`}>
                                <Badge
                                  variant="secondary"
                                  className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer text-xs"
                                >
                                  {product.name}
                                </Badge>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
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
