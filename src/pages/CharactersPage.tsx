import CharacterCard from "@/components/CharacterCard";
import CharactersSkeleton from "@/components/skeletonLayouts/CharactersSkeleton";
// import CharactersSkeleton from "@/components/skeletonLayouts/CharactersSkeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ICharacter } from "@/interfaces/CharacterInterface";
import { fetcher } from "@/lib/swrFetcher";
import { useState } from "react";
import useSWR from "swr";

function CharactersPage() {
  const [page, setPage] = useState(1);
  const pageSize = 15;

  const { data, error, isLoading, isValidating } = useSWR(
    `https://www.anapioficeandfire.com/api/characters?page=${page}&pageSize=${pageSize}`,
    fetcher,
    { revalidateOnFocus: false }
  );

  const isPageLoading = !data || isValidating;

  return (
    <div className="grid grid-cols-4 w-full gap-5">
      {/* Sidebar */}
      <Card className="w-full max-w-sm col-start-1 col-end-2 h-fit">
        <CardHeader>
          <CardTitle>Characters</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            Browsing characters from the world of Ice and Fire.
          </p>
          <p className="text-xs mt-2 italic">
            Advanced filtering coming later.
          </p>
        </CardContent>
      </Card>

      {/* Main content */}
      <div className="col-start-2 col-end-5">
        {error ? (
          <div>Error loading characters</div>
        ) : !isLoading ? (
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
