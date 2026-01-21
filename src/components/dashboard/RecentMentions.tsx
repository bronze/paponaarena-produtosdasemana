import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mentions, getProductById, getPersonById, getEpisodeById } from "@/data/mentions";

export function RecentMentions() {
  // Get the 8 most recent mentions (from Episode 2)
  const recentMentions = mentions
    .filter((m) => m.episodeId === 2)
    .slice(0, 8);

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Recent Mentions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentMentions.map((mention) => {
            const product = getProductById(mention.productId);
            const person = getPersonById(mention.personId);
            const episode = getEpisodeById(mention.episodeId);

            if (!product || !person || !episode) return null;

            return (
              <div
                key={mention.id}
                className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Link
                    to={`/people/${person.id}`}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {person.name}
                  </Link>
                  <span className="text-muted-foreground">→</span>
                  <Link
                    to={`/products/${product.id}`}
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {product.name}
                  </Link>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {product.category}
                </Badge>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
