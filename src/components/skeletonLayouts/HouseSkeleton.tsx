import { Skeleton } from "../ui/skeleton";

function HouseSkeleton() {
  return (
    <div className="w-2xl space-y-6 p-6 flex flex-col items-center justify-center mx-auto">
      <Skeleton className="h-43 w-full rounded-t-md" />
      <Skeleton className="h-25 w-full rounded-t-md" />
      <Skeleton className="h-30 w-full rounded-t-md" />
      <Skeleton className="h-25 w-full rounded-t-md" />
    </div>
  );
}

export default HouseSkeleton;
