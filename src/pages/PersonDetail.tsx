import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, MessageSquare, Mic, Package } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import {
  getPersonById,
  getMentionsByPerson,
  getPersonTopProducts,
  getProductById,
  getEpisodeById,
} from "@/data/mentions";

const COLORS = [
  "hsl(140 20% 40%)",
  "hsl(18 50% 55%)",
  "hsl(45 40% 55%)",
  "hsl(200 25% 50%)",
  "hsl(340 30% 55%)",
];

export default function PersonDetail() {
  const { id } = useParams<{ id: string }>();
  const person = getPersonById(id || "");
  const mentions = getMentionsByPerson(id || "");

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
    const productMentions = mentions.filter(m => m.productId === item.product.id);
    const episodeNumbers = [...new Set(productMentions.map(m => m.episodeId))]
      .sort((a, b) => b - a);
    
    return {
      name: item.product.name,
      mentions: item.count,
      episodes: episodeNumbers,
    };
  });

  const episodeIds = [...new Set(mentions.map((m) => m.episodeId))];
  const productIds = [...new Set(mentions.map((m) => m.productId))];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: Array<{ payload: { name: string; mentions: number; episodes: number[] } }> }) => {
    if (!active || !payload?.length) return null;
    
    const data = payload[0].payload;
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
        <p className="font-semibold text-foreground">{data.name}</p>
        <p className="text-sm text-muted-foreground">
          {data.mentions} {data.mentions === 1 ? 'menção' : 'menções'}
        </p>
        <div className="mt-2 pt-2 border-t border-border">
          <p className="text-xs text-muted-foreground mb-1">Episódios:</p>
          <div className="flex flex-wrap gap-1">
            {data.episodes.slice(0, 8).map((ep: number) => (
              <span key={ep} className="text-xs bg-muted px-1.5 py-0.5 rounded">
                Ep {ep}
              </span>
            ))}
            {data.episodes.length > 8 && (
              <span className="text-xs text-muted-foreground">
                +{data.episodes.length - 8} mais
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="icon">
          <Link to="/people">
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </Button>
        <div className="flex items-center gap-4">
          <Avatar className="w-14 h-14 bg-primary/10">
            <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
              {getInitials(person.name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{person.name}</h1>
            <p className="text-muted-foreground">Contributor analytics</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{mentions.length}</p>
              <p className="text-sm text-muted-foreground">Total Mentions</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Package className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{productIds.length}</p>
              <p className="text-sm text-muted-foreground">Unique Products</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-chart-3/10 flex items-center justify-center">
              <Mic className="w-5 h-5 text-chart-3" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{episodeIds.length}</p>
              <p className="text-sm text-muted-foreground">Episodes Appeared</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products Chart */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">Most Mentioned Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[280px]">
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
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted))' }} />
                  <Bar dataKey="mentions" radius={[0, 4, 4, 0]}>
                    {chartData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* All Mentions */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">All Mentions</CardTitle>
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
                  <div
                    key={mention.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div className="flex items-center gap-3 flex-wrap">
                      {product.alsoCredits ? (
                        <>
                          {product.alsoCredits.map((creditedId, idx) => {
                            const creditedProduct = getProductById(creditedId);
                            if (!creditedProduct) return null;
                            return (
                              <span key={creditedId} className="flex items-center gap-1">
                                {idx > 0 && <span className="text-muted-foreground">+</span>}
                                <Link
                                  to={`/products/${creditedProduct.id}`}
                                  className="font-medium text-foreground hover:text-primary transition-colors"
                                >
                                  {creditedProduct.name}
                                </Link>
                              </span>
                            );
                          })}
                          <Badge variant="outline" className="text-xs">
                            combo
                          </Badge>
                        </>
                      ) : (
                        <Link
                          to={`/products/${product.id}`}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {product.name}
                        </Link>
                      )}
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                    </div>
                    <Link to={`/episodes/${episode.id}`}>
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                        Ep {episode.id}
                      </Badge>
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
