import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import {
  getCategories,
  getProductsByCategory,
  getMentionsByProduct,
} from "@/data/mentions";

const COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
  "#8b5cf6",
  "#f59e0b",
  "#10b981",
  "#ec4899",
];

export function CategoryPieChart() {
  const navigate = useNavigate();

  const categoryData = getCategories()
    .map((category) => {
      const categoryProducts = getProductsByCategory(category).filter(
        (p) => !p.parentId && !p.alsoCredits
      );

      const mentionCount = categoryProducts.reduce(
        (sum, p) => sum + getMentionsByProduct(p.id).length,
        0
      );

      return { name: category, value: mentionCount };
    })
    .filter((c) => c.value > 0)
    .sort((a, b) => b.value - a.value)
    .slice(0, 8); // Top 8 categories for readability

  const total = categoryData.reduce((sum, c) => sum + c.value, 0);

  const handleClick = (category: string) => {
    navigate(`/categories/${encodeURIComponent(category)}`);
  };

  return (
    <Card className="bg-card border-border">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Mentions by Category</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
                cursor="pointer"
                onClick={(data) => handleClick(data.name)}
              >
                {categoryData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload;
                    const percentage = ((data.value / total) * 100).toFixed(1);
                    return (
                      <div className="rounded-lg border border-border bg-background px-3 py-2 text-sm shadow-xl">
                        <p className="font-medium">{data.name}</p>
                        <p className="text-muted-foreground">
                          {data.value} mentions ({percentage}%)
                        </p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        {/* Legend */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-2">
          {categoryData.slice(0, 6).map((category, index) => (
            <button
              key={category.name}
              onClick={() => handleClick(category.name)}
              className="flex items-center gap-2 text-xs hover:text-primary transition-colors text-left"
            >
              <div
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="truncate">{category.name}</span>
              <span className="text-muted-foreground ml-auto">
                {category.value}
              </span>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
