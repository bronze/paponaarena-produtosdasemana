import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import Dashboard from "@/pages/Dashboard";
import Episodes from "@/pages/Episodes";
import EpisodeDetail from "@/pages/EpisodeDetail";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetail";
import Categories from "@/pages/Categories";
import CategoryDetail from "@/pages/CategoryDetail";
import People from "@/pages/People";
import PersonDetail from "@/pages/PersonDetail";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/episodes" element={<Episodes />} />
            <Route path="/episodes/:id" element={<EpisodeDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:category" element={<CategoryDetail />} />
            <Route path="/people" element={<People />} />
            <Route path="/people/:id" element={<PersonDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
