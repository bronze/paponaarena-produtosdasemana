import { Mic, Package, Users, MessageSquare } from "lucide-react";
import { StatCard } from "@/components/dashboard/StatCard";
import { TopProductsChart } from "@/components/dashboard/TopProductsChart";
import { RecentMentions } from "@/components/dashboard/RecentMentions";
import { LatestEpisodeCard } from "@/components/dashboard/LatestEpisodeCard";
import { episodes, products, people, mentions } from "@/data/mentions";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Track product mentions from the Papo na Arena podcast
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Episodes"
          value={episodes.length}
          icon={Mic}
          description="Recorded episodes"
        />
        <StatCard
          title="Products Tracked"
          value={products.length}
          icon={Package}
          description="Unique products"
        />
        <StatCard
          title="Contributors"
          value={people.length}
          icon={Users}
          description="People who mentioned"
        />
        <StatCard
          title="Total Mentions"
          value={mentions.length}
          icon={MessageSquare}
          description="Product mentions"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Products Chart - Takes 2 columns */}
        <div className="lg:col-span-2">
          <TopProductsChart />
        </div>

        {/* Right Column - Latest Episode + Stats */}
        <div className="space-y-6">
          <LatestEpisodeCard />
          <RecentMentions />
        </div>
      </div>
    </div>
  );
}
