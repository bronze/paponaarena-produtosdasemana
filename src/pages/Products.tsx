import { useState } from "react";
import { Link } from "react-router-dom";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, ArrowUpDown, ArrowUp, ArrowDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { products, getProductMentionCount, getMentionsByProduct, getCategories, episodes } from "@/data/mentions";

type SortKey = "name" | "mentions" | "episodes";
type SortDir = "asc" | "desc";

const ProductCard = ({ product, index }: { product: { id: string; name: string; category: string; mentionCount: number; episodeCount: number }; index: number }) => (
  <Link to={`/products/${product.id}`} className="block group">
    <Card className="p-4 border-border hover:border-primary/50 transition-colors">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="mb-2">
            <span className="text-sm text-muted-foreground font-medium">#{index + 1}</span>
            <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mt-1">{product.name}</h3>
          </div>
          <Badge variant="secondary" className="text-xs">{product.category}</Badge>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right">
            <div className="font-semibold text-primary text-lg">{product.mentionCount}</div>
            <div className="text-xs text-muted-foreground">menções</div>
          </div>
          <div className="text-right">
            <div className="font-semibold text-muted-foreground text-lg">{product.episodeCount}</div>
            <div className="text-xs text-muted-foreground">episódios</div>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </div>
    </Card>
  </Link>
);

export default function Products() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortKey, setSortKey] = useState<SortKey>("mentions");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const isMobile = useIsMobile();

  const categories = getCategories();

  const productData = products
    .filter((p) => !p.parentId && !p.alsoCredits) // Hide variants AND combo products
    .map((product) => {
      const mentions = getMentionsByProduct(product.id);
      const episodeIds = new Set(mentions.map((m) => m.episodeId));
      return {
        ...product,
        mentionCount: mentions.length,
        episodeCount: episodeIds.size,
      };
    })
    .filter((p) => p.mentionCount > 0); // Only show products with mentions

  const filteredProducts = productData
    .filter((p) => selectedCategory === "all" || p.category === selectedCategory)
    .filter(
      (p) =>
        p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase()),
    )
    .sort((a, b) => {
      let comparison = 0;
      switch (sortKey) {
        case "name":
          comparison = a.name.localeCompare(b.name);
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

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  const handleTabSort = (value: string) => {
    setSortKey(value as SortKey);
    setSortDir(value === "name" ? "asc" : "desc");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Products</h1>
        <p className="text-muted-foreground mt-1">All products mentioned across {episodes.length} episodes</p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1 sm:max-w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {isMobile && (
          <Tabs value={sortKey} onValueChange={handleTabSort}>
            <TabsList className="w-full">
              <TabsTrigger value="mentions" className="flex-1">Menções</TabsTrigger>
              <TabsTrigger value="name" className="flex-1">Nome</TabsTrigger>
              <TabsTrigger value="episodes" className="flex-1">Episódios</TabsTrigger>
            </TabsList>
          </Tabs>
        )}
      </div>

      {isMobile ? (
        <div className="space-y-3">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-border overflow-hidden bg-card">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-12">#</TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 -ml-3 font-medium"
                    onClick={() => handleSort("name")}
                  >
                    Product
                    {sortKey === "name" ? (
                      sortDir === "desc" ? (
                        <ArrowDown className="ml-2 h-4 w-4 text-primary" />
                      ) : (
                        <ArrowUp className="ml-2 h-4 w-4 text-primary" />
                      )
                    ) : (
                      <ArrowUpDown className="ml-2 h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </TableHead>
                <TableHead>Category</TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 -ml-3 font-medium"
                    onClick={() => handleSort("mentions")}
                  >
                    Mentions
                    {sortKey === "mentions" ? (
                      sortDir === "desc" ? (
                        <ArrowDown className="ml-2 h-4 w-4 text-primary" />
                      ) : (
                        <ArrowUp className="ml-2 h-4 w-4 text-primary" />
                      )
                    ) : (
                      <ArrowUpDown className="ml-2 h-4 w-4 text-muted-foreground" />
                    )}
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
                    {sortKey === "episodes" ? (
                      sortDir === "desc" ? (
                        <ArrowDown className="ml-2 h-4 w-4 text-primary" />
                      ) : (
                        <ArrowUp className="ml-2 h-4 w-4 text-primary" />
                      )
                    ) : (
                      <ArrowUpDown className="ml-2 h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProducts.map((product, index) => (
                <TableRow key={product.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium text-muted-foreground">{index + 1}</TableCell>
                  <TableCell>
                    <Link
                      to={`/products/${product.id}`}
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {product.name}
                    </Link>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{product.category}</Badge>
                  </TableCell>
                  <TableCell>
                    <span className="font-semibold text-primary">{product.mentionCount}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-muted-foreground">
                      {product.episodeCount} / {episodes.length}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      {filteredProducts.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">No products found matching "{search}"</div>
      )}
    </div>
  );
}