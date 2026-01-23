import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BarChart, Bar, XAxis, YAxis, Cell, Tooltip, ResponsiveContainer, TooltipProps } from "recharts";
import { ArrowLeft, Package, MessageSquare, Mic, ArrowUpDown } from "lucide-react";
import { getProductsByCategory, getMentionsByProduct, episodes } from "@/data/mentions";

const COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

const TOOLTIP_STYLE = {
  backgroundColor: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "8px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

type SortKey = "name" | "mentions" | "episodes";
type SortDir = "asc" | "desc";

export default function CategoryDetail() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const decodedCategory = decodeURIComponent(category || "");

  const [sortKey, setSortKey] = useState<SortKey>("mentions");
  const [sortDir, setSortDir] = useState<SortDir>("desc");

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  // Get products in this category (excluding variants and combos)
  const categoryProducts = getProductsByCategory(decodedCategory).filter((p) => !p.parentId && !p.alsoCredits);

  // Calculate stats for each product
  const productData = categoryProducts
    .map((product) => {
      const mentions = getMentionsByProduct(product.id);
      const episodeIds = new Set(mentions.map((m) => m.episodeId));
      return {
        product,
        mentionCount: mentions.length,
        episodeCount: episodeIds.size,
      };
    })
    .sort((a, b) => b.mentionCount - a.mentionCount);

  // Total stats
  const totalMentions = productData.reduce((sum, p) => sum + p.mentionCount, 0);
  const totalProducts = productData.length;
  const allEpisodes = new Set(productData.flatMap((p) => getMentionsByProduct(p.product.id).map((m) => m.episodeId)));
  const episodeCoverage = allEpisodes.size;

  // Chart data (top 10 by mentions)
  const chartData = productData.slice(0, 10).map((item) => ({
    productId: item.product.id,
    name: item.product.name,
    mentions: item.mentionCount,
  }));

  // Sorted product data for table
  const sortedProductData = [...productData].sort((a, b) => {
    let comparison = 0;
    switch (sortKey) {
      case "name":
        comparison = a.product.name.localeCompare(b.product.name);
        break;
      case "mentions":
        comparison = a.mentionCount - b.mentionCount;
        break;
      case "episodes":
        comparison = a.episodeCount - b.episodeCount;
        break;
    }
    return sortDir === "desc" ? -comparison : comparison;
  });

  if (categoryProducts.length === 0) {
    return (
      <div className="space-y-6">
        <Button variant="ghost" asChild>
          <Link to="/categories" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </Link>
        </Button>
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">Category "{decodedCategory}" not found or has no products.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link to="/categories">
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-foreground">{decodedCategory}</h1>
          <p className="text-muted-foreground">Category Overview</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{totalMentions}</p>
                <p className="text-sm text-muted-foreground">Total Mentions</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">{totalProducts}</p>
                <p className="text-sm text-muted-foreground">Products</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mic className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">
                  {episodeCoverage}/{episodes.length}
                </p>
                <p className="text-sm text-muted-foreground">Episodes</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Products Chart */}
      {chartData.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Top Products in {decodedCategory}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 12 }} />
                  <Tooltip contentStyle={TOOLTIP_STYLE} cursor={{ fill: "hsl(var(--muted))" }} />
                  <Bar
                    dataKey="mentions"
                    radius={[0, 4, 4, 0]}
                    cursor="pointer"
                    onClick={(data) => {
                      if (data?.productId) {
                        navigate(`/products/${data.productId}`);
                      }
                    }}
                  >
                    {chartData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}

      {/* All Products Table */}
      <Card>
        {/* <CardHeader>
          <CardTitle>All Products</CardTitle>
        </CardHeader> */}
        {/* <CardContent> */}
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="w-12">#</TableHead>
              <TableHead>
                <Button variant="ghost" size="sm" className="h-8 -ml-3 font-medium" onClick={() => handleSort("name")}>
                  Product
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 -ml-3 font-medium"
                  onClick={() => handleSort("mentions")}
                >
                  Mentions
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
              <TableHead>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 -ml-3 font-medium"
                  onClick={() => handleSort("episodes")}
                >
                  Episodes
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedProductData.map((item, index) => (
              <TableRow key={item.product.id}>
                <TableCell className="font-medium text-muted-foreground">{index + 1}</TableCell>
                <TableCell>
                  <Link
                    to={`/products/${item.product.id}`}
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.product.name}
                  </Link>
                </TableCell>
                <TableCell className="text-right">
                  <span className="font-semibold text-primary">{item.mentionCount}</span>
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {item.episodeCount}/{episodes.length}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {/* </CardContent> */}
      </Card>
    </div>
  );
}
