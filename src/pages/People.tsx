import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ArrowRight } from "lucide-react";
import { people, getPersonMentionCount, getMentionsByPerson, episodes } from "@/data/mentions";

export default function People() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"mentions" | "name">("mentions");

  const peopleData = people.map((person) => {
    const mentions = getMentionsByPerson(person.id);
    const episodeIds = new Set(mentions.map((m) => m.episodeId));
    return {
      ...person,
      mentionCount: mentions.length,
      episodeCount: episodeIds.size,
    };
  });

  const filteredPeople = peopleData.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortedPeople = [...filteredPeople].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    // By mentions (default): desc by count, then A-Z by name
    if (b.mentionCount !== a.mentionCount) {
      return b.mentionCount - a.mentionCount;
    }
    return a.name.localeCompare(b.name);
  });

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">People</h1>
        <p className="text-muted-foreground mt-1">
          Contributors and hosts who mentioned products
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search people..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>

        <Tabs value={sortBy} onValueChange={(v) => setSortBy(v as "mentions" | "name")}>
          <TabsList>
            <TabsTrigger value="mentions">Most mentions</TabsTrigger>
            <TabsTrigger value="name">Alphabetical</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedPeople.map((person) => (
          <Link key={person.id} to={`/people/${person.id}`}>
            <Card className="bg-card border-border hover:border-primary/50 transition-colors group h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 bg-primary/10">
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {getInitials(person.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {person.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {person.mentionCount} products mentioned
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {person.episodeCount} / {episodes.length} episodes
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {filteredPeople.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No people found matching "{search}"
        </div>
      )}
    </div>
  );
}
