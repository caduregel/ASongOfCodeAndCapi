import HouseCard from "@/components/HouseCard";
import HousesFilterCard from "@/components/HousesFilterCard";
import HousesSkeleton from "@/components/skeletonLayouts/HousesSkeleton";
import { Button } from "@/components/ui/button";
import type { HousesFilterValues, IHouse } from "@/interfaces/HouseInterface";
import { fetcher } from "@/lib/swrFetcher";
import { buildQueryString } from "@/lib/utils";
import { useState } from "react";
import useSWR from "swr";

function LandingPage() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<HousesFilterValues>({});
  const pageSize = 15;

  const query = buildQueryString(filters, page, pageSize);

  const { data, error, isLoading, isValidating } = useSWR(
    `https://www.anapioficeandfire.com/api/houses?${query}`,
    fetcher,
    { revalidateOnFocus: false }
  );

  const isPageLoading = !data || isValidating;

  const handleNext = async () => setPage((prev) => prev + 1);

  const handlePrev = () => setPage((prev) => Math.max(prev - 1, 1));
  return (
    <>
      <div className="grid grid-cols-4 w-full gap-5 ">
        <HousesFilterCard
          onApply={(newFilters) => {
            setPage(1); // Reset to first page on filter change
            setFilters(newFilters);
          }}
        />
        <div className="col-start-2 col-end-5">
          {error ? (
            <div>Error loading data</div>
          ) : isLoading ? (
            <HousesSkeleton />
          ) : (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data?.map((item: IHouse) => (
                  <HouseCard key={item.url} house={item} />
                ))}
              </div>
              {isPageLoading && (
                <div className="text-center mt-4">Loading new page...</div>
              )}
              <div className="flex justify-center space-x-2 mt-6">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={page === 1}
                >
                  Previous
                </Button>
                <Button variant="secondary">{page}</Button>
                <Button variant="outline" onClick={handleNext}>
                  Next
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
export default LandingPage;
