import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ChevronRight, FolderOpen } from "lucide-react";
import {
  getCategories,
  getProductsByCategory,
  getMentionsByProduct,
  Product,
} from "@/data/mentions";

interface CategoryData {
  category: string;
  mentionCount: number;
  productCount: number;
  topProducts: { product: Product; count: number }[];
}

export default function Categories() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"mentions" | "name">("mentions");

  // Process category data
  const categoryData: CategoryData[] = getCategories()
    .map((category) => {
      const categoryProducts = getProductsByCategory(category).filter(
        (p) => !p.parentId && !p.alsoCredits
      );

      const productMentions = categoryProducts.map((p) => ({
        product: p,
        count: getMentionsByProduct(p.id).length,
      }));

      const mentionCount = productMentions.reduce((sum, item) => sum + item.count, 0);

      const topProducts = productMentions
        .filter((item) => item.count > 0)
        .sort((a, b) => b.count - a.count)
        .slice(0, 3);

      return {
        category,
        mentionCount,
        productCount: categoryProducts.length,
        topProducts,
      };
    })
    .sort((a, b) => b.mentionCount - a.mentionCount);

  // Filter categories based on search (category name OR product names)
  const filteredCategories = categoryData.filter((item) => {
    const query = searchQuery.toLowerCase();
    
    // Match category name
    if (item.category.toLowerCase().includes(query)) {
      return true;
    }
    
    // Match any product in the category
    const categoryProducts = getProductsByCategory(item.category);
    return categoryProducts.some((product) =>
      product.name.toLowerCase().includes(query)
    );
  });

  // Sort categories based on selected option
  const sortedCategories = [...filteredCategories].sort((a, b) => {
    if (sortBy === "name") {
      return a.category.localeCompare(b.category);
    }
    return b.mentionCount - a.mentionCount;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Categories</h1>
        <p className="text-muted-foreground mt-1">
          Product categories mentioned in the podcast
        </p>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search categories or products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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

      {filteredCategories.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No categories found matching "{searchQuery}"
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedCategories.map((item) => (
            <Link
              key={item.category}
              to={`/categories/${encodeURIComponent(item.category)}`}
              className="block"
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-colors group h-full">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <FolderOpen className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.category}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.mentionCount} mentions · {item.productCount} products
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>

                  {item.topProducts.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.topProducts.map(({ product, count }) => (
                        <Badge
                          key={product.id}
                          variant="secondary"
                          className="text-xs"
                        >
                          {product.name} ({count})
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
