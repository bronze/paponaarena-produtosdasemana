import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mentions, getProductById, getPersonById, getProductLinkId } from "@/data/mentions";

export function RecentMentions() {
  // Get the latest episode ID
  const latestEpisodeId = Math.max(...mentions.map((m) => m.episodeId));
  
  // Get all mentions from the latest episode
  const latestMentions = mentions.filter((m) => m.episodeId === latestEpisodeId);

  // Group by person
  const mentionsByPerson = new Map<string, typeof latestMentions>();
  latestMentions.forEach((m) => {
    const existing = mentionsByPerson.get(m.personId) || [];
    mentionsByPerson.set(m.personId, [...existing, m]);
  });

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Recent Mentions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {Array.from(mentionsByPerson.entries())
            .slice(0, 8)
            .map(([personId, personMentions]) => {
              const person = getPersonById(personId);
              if (!person) return null;

              return (
                <div
                  key={personId}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3 flex-wrap">
                    <Link
                      to={`/people/${person.id}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
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
                              <Badge variant="outline" className="text-xs">combo</Badge>
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
  );
}
