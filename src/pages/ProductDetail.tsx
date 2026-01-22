import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Mic, Users, ExternalLink } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import {
  getProductById,
  getMentionsByProduct,
  getProductMentionsByEpisode,
  getPersonById,
  getEpisodeById,
  getChildProducts,
} from "@/data/mentions";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");
  const mentions = getMentionsByProduct(id || "");

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <p className="text-muted-foreground">Product not found</p>
        <Button asChild variant="link" className="mt-4">
          <Link to="/products">Back to Products</Link>
        </Button>
      </div>
    );
  }

  const mentionsByEpisode = getProductMentionsByEpisode(product.id);
  const chartData = mentionsByEpisode.map((item) => ({
    episode: `Ep ${item.episodeId}`,
    mentions: item.count,
  }));

  // Get unique people who mentioned this product
  const peopleIds = [...new Set(mentions.map((m) => m.personId))];
  const episodeIds = [...new Set(mentions.map((m) => m.episodeId))];

  // Get child products (variants) that aggregate into this product
  const childProducts = getChildProducts(product.id);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="icon">
          <Link to="/products">
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h1 className="text-2xl font-bold text-foreground">{product.name}</h1>
            <Badge variant="secondary">{product.category}</Badge>
            {product.url && (
              <Button asChild variant="outline" size="sm">
                <a href={product.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit
                </a>
              </Button>
            )}
          </div>
          <p className="text-muted-foreground mt-1">
            Product mention analytics
          </p>
          {childProducts.length > 0 && (
            <div className="flex items-center gap-2 mt-2 flex-wrap">
              <span className="text-sm text-muted-foreground">Includes variants:</span>
              {childProducts.map((child) => (
                <Badge key={child.id} variant="outline" className="text-xs">
                  {child.name}
                </Badge>
              ))}
            </div>
          )}
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
              <Users className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{peopleIds.length}</p>
              <p className="text-sm text-muted-foreground">People Mentioned</p>
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
              <p className="text-sm text-muted-foreground">Episodes Featured</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mentions Over Time */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">Mentions Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ left: 0, right: 20 }}>
                  <XAxis dataKey="episode" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
                  <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} allowDecimals={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(40 25% 99%)",
                      border: "1px solid hsl(35 20% 88%)",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="mentions"
                    stroke="hsl(140 20% 40%)"
                    strokeWidth={2}
                    dot={{ fill: "hsl(140 20% 40%)", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* People Who Mentioned */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">People Who Mentioned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-[250px] overflow-auto">
              {mentions.map((mention) => {
                const person = getPersonById(mention.personId);
                const episode = getEpisodeById(mention.episodeId);
                if (!person || !episode) return null;

                return (
                  <div
                    key={mention.id}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <div className="flex items-center gap-3">
                      <Link
                        to={`/people/${person.id}`}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {person.name}
                      </Link>
                      {mention.context && (
                        <span className="text-sm text-muted-foreground">
                          "{mention.context}"
                        </span>
                      )}
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
