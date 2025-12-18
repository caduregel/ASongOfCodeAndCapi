// components/HousesFilterCard.tsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import type { HousesFilterValues } from "@/interfaces/HouseInterface";
import FilterCheckbox from "./ui/FilterCheckbox";

interface Props {
  onApply: (filters: HousesFilterValues) => void;
}

function HousesFilterCard({ onApply }: Props) {
  const [filters, setFilters] = useState<HousesFilterValues>({});
  const updateFilter = <K extends keyof HousesFilterValues>(
    key: K,
    value: HousesFilterValues[K]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  function cleanFilters(filters: HousesFilterValues) {
    return Object.fromEntries(
      Object.entries(filters).filter(
        ([, value]) => value !== undefined && value !== ""
      )
    );
  }

  return (
    <Card className="w-full max-w-sm h-fit">
      <CardHeader>
        <CardTitle>Filter through houses</CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
            Text filters are case-sensitive. Must match the house name exactly.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Text filters */}
        <div className="space-y-1">
          <Label htmlFor="name">House name</Label>
          <Input
            id="name"
            value={filters.name}
            onChange={(e) => updateFilter("name", e.target.value)}
            placeholder="e.g. House Stark of Winterfell"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="region">Region</Label>
          <Input
            id="region"
            value={filters.region}
            onChange={(e) => updateFilter("region", e.target.value)}
            placeholder="e.g. The North"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="words">Words</Label>
          <Input
            id="words"
            value={filters.words}
            onChange={(e) => updateFilter("words", e.target.value)}
            placeholder="e.g. Winter is Coming"
          />
        </div>

        {/* Boolean filters */}
        <div className="space-y-2 pt-2">
          <FilterCheckbox
            label="Has words"
            checked={filters.hasWords}
            onCheckedChange={(v) => updateFilter("hasWords", v)}
          />
          <FilterCheckbox
            label="Has titles"
            checked={filters.hasTitles}
            onCheckedChange={(v) => updateFilter("hasTitles", v)}
          />
          <FilterCheckbox
            label="Has seats"
            checked={filters.hasSeats}
            onCheckedChange={(v) => updateFilter("hasSeats", v)}
          />

          <FilterCheckbox
            label="Has ancestral weapons"
            checked={filters.hasAncestralWeapons}
            onCheckedChange={(v) => updateFilter("hasAncestralWeapons", v)}
          />
        </div>

        <Button
          className="w-full mt-4"
          onClick={() => onApply(cleanFilters(filters))}
        >
          Apply filters
        </Button>
      </CardContent>
    </Card>
  );
}

export default HousesFilterCard;
