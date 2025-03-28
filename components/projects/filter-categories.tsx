import type React from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PROFESSIONS_ICON } from "../../lib/const";
import { ProfessionsEnum } from "../../enum/professions.enum";
import { useEffect } from "react";

interface FilterCategoriesProps {
  categories: { categorie: string; slug: string }[];
  activeCategory: string;
  onCategoryChange: (category: ProfessionsEnum) => void;
  className?: string;
}

export function FilterCategories({
  categories,
  activeCategory,
  onCategoryChange,
  className,
}: FilterCategoriesProps) {
  return (
    <div className={cn("flex flex-wrap gap-2 justify-center", className)}>
      {[{ categorie: "Todos", slug: ProfessionsEnum.ALL }, ...categories].map(
        (category) => (
          <Button
            key={category.slug}
            variant={activeCategory === category.slug ? "default" : "outline"}
            size="sm"
            className="flex items-center gap-2"
            onClick={() => onCategoryChange(category.slug as ProfessionsEnum)}
          >
            {PROFESSIONS_ICON[category.slug as ProfessionsEnum]?.({
              className: "h-5 w-5",
            })}
            <span>{category.categorie}</span>
          </Button>
        )
      )}
    </div>
  );
}
