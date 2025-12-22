import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import type { CharactersFilterValues } from "@/interfaces/CharacterInterface";
import FilterCheckbox from "./ui/FilterCheckbox";

interface Props {
  onApply: (filters: CharactersFilterValues) => void;
}

function CharactersFilterCard({ onApply }: Props) {
  const [filters, setFilters] = useState<CharactersFilterValues>({});

  const updateFilter = <K extends keyof CharactersFilterValues>(
    key: K,
    value: CharactersFilterValues[K]
  ) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  function cleanFilters(filters: CharactersFilterValues) {
    return Object.fromEntries(
      Object.entries(filters).filter(
        ([, value]) => value !== undefined && value !== ""
      )
    );
  }

  return (
    <Card className="w-full max-w-sm h-fit">
      <CardHeader>
        <CardTitle>Filter characters</CardTitle>
        <CardDescription className="text-xs text-muted-foreground">
          Text filters are case-sensitive and must match exactly.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Name */}
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={filters.name}
            onChange={(e) => updateFilter("name", e.target.value)}
            placeholder="e.g. Jon Snow"
          />
        </div>

        {/* Gender */}
        <div className="space-y-1">
          <Label htmlFor="gender">Gender</Label>
          <Input
            id="gender"
            value={filters.gender}
            onChange={(e) => updateFilter("gender", e.target.value)}
            placeholder="Male / Female"
          />
        </div>

        {/* Culture */}
        <div className="space-y-1">
          <Label htmlFor="culture">Culture</Label>
          <Input
            id="culture"
            value={filters.culture}
            onChange={(e) => updateFilter("culture", e.target.value)}
            placeholder="e.g. Northmen"
          />
        </div>

        {/* Born / Died */}
        <div className="space-y-1">
          <Label htmlFor="born">Born</Label>
          <Input
            id="born"
            value={filters.born}
            onChange={(e) => updateFilter("born", e.target.value)}
            placeholder="e.g. 283 AC"
          />
        </div>

        <div className="space-y-1">
          <Label htmlFor="died">Died</Label>
          <Input
            id="died"
            value={filters.died}
            onChange={(e) => updateFilter("died", e.target.value)}
            placeholder="e.g. 300 AC"
          />
        </div>

        {/* Boolean */}
        <div className="space-y-2 pt-2">
          <FilterCheckbox
            label="Is alive"
            checked={filters.isAlive}
            onCheckedChange={(v) => updateFilter("isAlive", v)}
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

export default CharactersFilterCard;