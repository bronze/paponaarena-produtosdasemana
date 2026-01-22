import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { getTopProductsMentionsOverTime, getTopProducts } from "@/data/mentions";

const LINE_COLORS = [
  "hsl(355 75% 65%)",
  "hsl(330 60% 45%)",
  "hsl(25 80% 55%)",
  "hsl(200 60% 50%)",
  "hsl(280 50% 55%)",
  "hsl(170 55% 45%)",
  "hsl(45 70% 50%)",
  "hsl(0 65% 55%)",
  "hsl(220 55% 55%)",
  "hsl(300 45% 55%)",
];

export function ProductTrendsChart() {
  const data = getTopProductsMentionsOverTime(10);
  const topProducts = getTopProducts(10);

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Top Product Mentions Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ left: 0, right: 20, bottom: 20 }}>
              <XAxis dataKey="episode" tickLine={false} axisLine={false} tick={{ fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 12 }} allowDecimals={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(40 25% 99%)",
                  border: "1px solid hsl(35 20% 88%)",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
              <Legend wrapperStyle={{ paddingTop: 20 }} iconType="circle" iconSize={8} />
              {topProducts.map(({ product }, index) => (
                <Line
                  key={product.id}
                  type="monotone"
                  dataKey={product.name}
                  stroke={LINE_COLORS[index % LINE_COLORS.length]}
                  strokeWidth={2}
                  dot={{ r: 4, fill: LINE_COLORS[index % LINE_COLORS.length] }}
                  activeDot={{ r: 6 }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
