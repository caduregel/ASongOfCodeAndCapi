import { fetcher } from "@/lib/swrFetcher";
import { useParams } from "react-router";
import useSWR from "swr";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import CharacterName from "@/components/CharacterName";
import HouseName from "@/components/HouseName";

function CharactersPage() {
  const { characterid } = useParams();

  const {
    data: character,
    error,
    isLoading,
  } = useSWR(
    `https://www.anapioficeandfire.com/api/characters/${characterid}`,
    fetcher
  );

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error || !character) return <div className="p-6">Failed to load character</div>;

  const isDead = Boolean(character.died);

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">
            {character.name || "Unknown Character"}
          </CardTitle>

          <div className="flex gap-2 mt-2">
            {character.gender && (
              <Badge variant="secondary">{character.gender}</Badge>
            )}
            {isDead && <Badge variant="destructive">Deceased</Badge>}
          </div>
        </CardHeader>

        {(character.born || character.died) && (
          <CardContent className="text-sm text-muted-foreground">
            {character.born && (
              <p>
                <b>Born:</b> {character.born}
              </p>
            )}
            {character.died && (
              <p>
                <b>Died:</b> {character.died}
              </p>
            )}
          </CardContent>
        )}
      </Card>

      {/* Core Information */}
      <Card>
        <CardHeader>
          <CardTitle>Character Details</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 text-sm">
          {character.culture && (
            <p>
              <b>Culture:</b> {character.culture}
            </p>
          )}
          {character.titles.length > 0 && (
            <p>
              <b>Titles:</b> {character.titles.join(", ")}
            </p>
          )}
          {character.aliases.length > 0 && (
            <p>
              <b>Aliases:</b> {character.aliases.join(", ")}
            </p>
          )}
        </CardContent>
      </Card>

      {/* Allegiances */}
      {character.allegiances.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Allegiances</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {character.allegiances.map((house: string) => (
              <Badge key={house} variant="outline">
                <HouseName link={house} />
              </Badge>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Family */}
      {(character.father || character.mother || character.spouse) && (
        <Card>
          <CardHeader>
            <CardTitle>Family</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            {character.father && (
              <p>
                <b>Father:</b> <CharacterName link={character.father} />
              </p>
            )}
            {character.mother && (
              <p>
                <b>Mother:</b> <CharacterName link={character.mother} />
              </p>
            )}
            {character.spouse && (
              <p>
                <b>Spouse:</b> <CharacterName link={character.spouse} />
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Book Appearances */}
      {character.books.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Book Appearances</CardTitle>
          </CardHeader>
          <CardContent className="text-sm">
            Appears in {character.books.length} book(s)
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default CharactersPage;