import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MessageSquare } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import {
  getEpisodeById,
  getMentionsByEpisode,
  getProductById,
  getPersonById,
} from "@/data/mentions";

const COLORS = [
  "hsl(140 20% 40%)",
  "hsl(18 50% 55%)",
  "hsl(45 40% 55%)",
  "hsl(200 25% 50%)",
  "hsl(340 30% 55%)",
];

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

  const chartData = Array.from(productCounts.entries())
    .map(([productId, count]) => ({
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
          <h1 className="text-2xl font-bold text-foreground">{episode.title}</h1>
          <div className="flex items-center gap-4 mt-1">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {new Date(episode.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MessageSquare className="w-4 h-4" />
              {mentions.length} mentions
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
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(40 25% 99%)",
                      border: "1px solid hsl(35 20% 88%)",
                      borderRadius: "8px",
                    }}
                  />
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

        {/* Mentions by Person */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg">Mentions by Person</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-[300px] overflow-auto">
              {Array.from(mentionsByPerson.entries()).map(([personId, personMentions]) => {
                const person = getPersonById(personId);
                if (!person) return null;

                return (
                  <div key={personId} className="space-y-2">
                    <Link
                      to={`/people/${personId}`}
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {person.name}
                    </Link>
                    <div className="flex flex-wrap gap-2">
                      {personMentions.map((m) => {
                        const product = getProductById(m.productId);
                        return (
                          <Link key={m.id} to={`/products/${m.productId}`}>
                            <Badge
                              variant="secondary"
                              className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                            >
                              {product?.name}
                            </Badge>
                          </Link>
                        );
                      })}
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
