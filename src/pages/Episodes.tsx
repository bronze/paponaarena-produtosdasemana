import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mic, ArrowRight, Calendar } from "lucide-react";
import { getEpisodeYears, getEpisodesByYear, getMentionsByEpisode } from "@/data/mentions";

export default function Episodes() {
  const years = getEpisodeYears();
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  const filteredEpisodes = getEpisodesByYear(selectedYear).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Episodes</h1>
        <p className="text-muted-foreground mt-1">
          Browse all Papo na Arena podcast episodes
        </p>
      </div>

      <Tabs value={String(selectedYear)} onValueChange={(v) => setSelectedYear(v === "all" ? "all" : Number(v))}>
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          {years.map((year) => (
            <TabsTrigger key={year} value={String(year)}>
              {year}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredEpisodes.map((episode) => {
          const mentionCount = getMentionsByEpisode(episode.id).length;

          return (
            <Link key={episode.id} to={`/episodes/${episode.id}`}>
              <Card className="bg-card border-border hover:border-primary/50 transition-colors group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mic className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Episode {episode.id}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {episode.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {episode.description}
                      </p>
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {new Date(episode.date + "T12:00:00").toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </div>
                        <div className="flex items-center gap-1 text-sm font-medium text-primary">
                          {mentionCount} mentions
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
