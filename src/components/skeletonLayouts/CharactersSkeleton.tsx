import { useMemo } from "react";
import { Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function getRandomWidth() {
  // Generates a width class between 25% and 75%
  const widths = [
    "w-1/4",
    "w-1/3",
    "w-2/5",
    "w-1/2",
    "w-3/5",
    "w-2/3",
    "w-3/4",
  ];
  return widths[Math.floor(Math.random() * widths.length)];
}
function HousesSkeleton() {
  const skeletonCards = useMemo(() => {
    return Array.from({ length: 12 }, () => {
      const lineCount = Math.floor(Math.random() * 3) + 1; // 1–3 lines per card
      const lines = Array.from({ length: lineCount }, () => getRandomWidth());
      return lines;
    });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skeletonCards.map((lines, cardIdx) => (
        <Card key={cardIdx} className="h-40">
          {/* Title line */}
          <Skeleton className="w-3/4 mt-4 mx-4 rounded-md" />
          {/* Random content lines */}
          {lines.map((widthClass, idx) => (
            <Skeleton
              key={idx}
              className={`h-4 ${widthClass} rounded-md mx-4 mt-2`}
            />
          ))}
        </Card>
      ))}
    </div>
  );
}
export default HousesSkeleton;
