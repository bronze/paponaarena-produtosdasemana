import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  description?: string;
  href?: string;
}

export function StatCard({ title, value, icon: Icon, description, href }: StatCardProps) {
  const cardContent = (
    <Card
      className={`h-full bg-card border-border ${href ? "hover:border-primary/50 transition-colors cursor-pointer" : ""}`}
    >
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-semibold text-foreground">{value}</p>
            {description && <p className="text-xs text-muted-foreground">{description}</p>}
          </div>
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  if (href) {
    return <Link to={href}>{cardContent}</Link>;
  }

  return cardContent;
}
