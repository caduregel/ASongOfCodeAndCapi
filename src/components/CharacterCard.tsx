import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ICharacter } from "@/interfaces/CharacterInterface";
import { getIdFromUrl } from "@/lib/utils";

interface Props {
  character: ICharacter;
}

function CharacterCard({ character }: Props) {
  const displayName =
    character.name || character.aliases?.[0] || "Unknown character";

  const characterId = getIdFromUrl(character.url);

  return (
    <a
      href={`/character/${characterId}`}
      className="hover:scale-[1.05] transition-transform"
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{displayName}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 text-sm">
          {character.culture && (
            <p>
              <strong>Culture:</strong> {character.culture}
            </p>
          )}

          {character.born && (
            <p>
              <strong>Born:</strong> {character.born}
            </p>
          )}

          {character.died && (
            <p>
              <strong>Died:</strong> {character.died}
            </p>
          )}

          {character.titles?.length > 0 && character.titles[0] !== "" && (
            <p>
              <strong>Titles:</strong> {character.titles.join(", ")}
            </p>
          )}
        </CardContent>
      </Card>
    </a>
  );
}

export default CharacterCard;
