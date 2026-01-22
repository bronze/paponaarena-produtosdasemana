import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { getTopProducts } from "@/data/mentions";

const COLORS = [
  "hsl(355 75% 65%)",
  "hsl(330 60% 45%)",
  "hsl(25 80% 55%)",
  "hsl(200 60% 50%)",
  "hsl(280 50% 55%)",
];

export function TopProductsChart() {
  const navigate = useNavigate();
  const topProducts = getTopProducts(10);

  const data = topProducts.map((item) => ({
    id: item.product.id,
    name: item.product.name,
    mentions: item.count,
  }));

  return (
    <Card className="bg-card border-border">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">Top 10 Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ left: 0, right: 20 }}>
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
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
                cursor={{ fill: "hsl(130 15% 94%)" }}
              />
              <Bar
                dataKey="mentions"
                radius={[0, 4, 4, 0]}
                cursor="pointer"
                onClick={(data) => {
                  if (data?.id) {
                    navigate(`/products/${data.id}`);
                  }
                }}
              >
                {data.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
