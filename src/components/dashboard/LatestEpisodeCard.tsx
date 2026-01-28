import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, ArrowRight } from "lucide-react";
import { episodes, getMentionsByEpisode } from "@/data/mentions";
import { compareDatesDesc } from "@/lib/utils";

export function LatestEpisodeCard() {
  const latestEpisode = [...episodes].sort((a, b) => compareDatesDesc(a.date, b.date))[0];
  const mentionCount = getMentionsByEpisode(latestEpisode.id).length;

  return (
    <Card className="bg-primary text-primary-foreground border-0">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
            <Mic className="w-6 h-6" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium bg-primary-foreground/20 px-2 py-0.5 rounded">
                Latest Episode
              </span>
            </div>
            <h3 className="text-lg font-semibold">{latestEpisode.title}</h3>
            <p className="text-sm text-primary-foreground/80">
              {mentionCount} products mentioned
            </p>
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="mt-3"
            >
              <Link to={`/episodes/${latestEpisode.id}`}>
                View Episode <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
