import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { getCategoryMentionsOverTime, getTopCategoryNames } from "@/data/mentions";

const AREA_COLORS = [
  "hsl(355 75% 65%)",
  "hsl(200 60% 50%)",
  "hsl(45 70% 50%)",
  "hsl(170 55% 45%)",
  "hsl(280 50% 55%)",
  "hsl(25 80% 55%)",
  "hsl(330 60% 45%)",
  "hsl(140 50% 45%)",
];

export function CategoryTrendsChart() {
  const data = getCategoryMentionsOverTime(8);
  const topCategories = getTopCategoryNames(8);

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Category Mentions Over Time
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ left: 0, right: 20, bottom: 20 }}>
              <XAxis
                dataKey="episode"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12 }}
                allowDecimals={false}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(40 25% 99%)",
                  border: "1px solid hsl(35 20% 88%)",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
              <Legend
                wrapperStyle={{ paddingTop: 20 }}
                iconType="circle"
                iconSize={8}
              />
              {topCategories.map((category, index) => (
                <Area
                  key={category}
                  type="monotone"
                  dataKey={category}
                  stackId="1"
                  stroke={AREA_COLORS[index % AREA_COLORS.length]}
                  fill={AREA_COLORS[index % AREA_COLORS.length]}
                  fillOpacity={0.6}
                />
              ))}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
