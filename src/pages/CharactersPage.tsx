import CharacterCard from "@/components/CharacterCard";
import CharactersFilterCard from "@/components/CharactersFilterCard";
import CharactersSkeleton from "@/components/skeletonLayouts/CharactersSkeleton";
import { Button } from "@/components/ui/button";
import type { CharactersFilterValues, ICharacter } from "@/interfaces/CharacterInterface";
import { fetcher } from "@/lib/swrFetcher";
import { buildQueryString } from "@/lib/utils";
import { useState } from "react";
import useSWR from "swr";

function CharactersPage() {
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<CharactersFilterValues>({});

  const pageSize = 15;

  const query = buildQueryString(filters, page, pageSize);

  const { data, error, isLoading, isValidating } = useSWR(
    `https://www.anapioficeandfire.com/api/characters?${query}`,
    fetcher,
    { revalidateOnFocus: false }
  );

  const isPageLoading = !data || isValidating;

  return (
    <div className="grid grid-cols-4 w-full gap-5">
      {/* Sidebar */}
      <CharactersFilterCard
        onApply={(newFilters) => {
          setPage(1);
          setFilters(newFilters);
        }}
      />

      {/* Main content */}
      <div className="col-start-2 col-end-5">
        {error ? (
          <div>Error loading characters</div>
        ) : isLoading ? (
          <CharactersSkeleton />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data?.map((character: ICharacter) => (
                <CharacterCard key={character.url} character={character} />
              ))}
            </div>

            {isPageLoading && (
              <div className="text-center mt-4">Loading new page...</div>
            )}

            <div className="flex justify-center space-x-2 mt-6">
              <Button
                variant="outline"
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
                disabled={page === 1}
              >
                Previous
              </Button>
              <Button variant="secondary">{page}</Button>
              <Button variant="outline" onClick={() => setPage((p) => p + 1)}>
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CharactersPage;
