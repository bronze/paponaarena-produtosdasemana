import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, MessageSquare } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, TooltipProps } from "recharts";
import {
  getEpisodeById,
  getMentionsByEpisode,
  getProductById,
  getPersonById,
} from "@/data/mentions";
import { formatEpisodeDate } from "@/lib/utils";

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
          <div className="flex items-center gap-4 mt-1">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              {formatEpisodeDate(episode.date, { month: "long", day: "numeric", year: "numeric" })}
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
                  <Tooltip contentStyle={TOOLTIP_STYLE} cursor={{ fill: 'hsl(var(--muted))' }} />
                  <Bar
                    dataKey="mentions"
                    radius={[0, 4, 4, 0]}
                    cursor="pointer"
                    onClick={(data) => {
                      if (data?.productId) {
                        navigate(`/products/${data.productId}`);
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
              {mentions
                .slice()
                .sort((a, b) => {
                  const aName = getPersonById(a.personId)?.name || "";
                  const bName = getPersonById(b.personId)?.name || "";
                  return aName.localeCompare(bName);
                })
                .map((mention) => {
                  const person = getPersonById(mention.personId);
                  const product = getProductById(mention.productId);
                  if (!person || !product) return null;

                  return (
                    <div
                      key={mention.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                    >
                      <div className="flex items-center gap-3 flex-wrap">
                        <Link
                          to={`/people/${mention.personId}`}
                          className="font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {person.name}
                        </Link>
                        <Link to={`/products/${mention.productId}`}>
                          <Badge
                            variant="secondary"
                            className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer text-xs"
                          >
                            {product.name}
                          </Badge>
                        </Link>
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
