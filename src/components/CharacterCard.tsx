import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ICharacter } from "@/interfaces/CharacterInterface";

interface CharacterCardProps {
  character: ICharacter;
}

function CharacterCard({ character }: CharacterCardProps) {
  const isDead = Boolean(character.died);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{character.name || "Unknown Character"}</CardTitle>

        <div className="flex gap-2 mt-2">
          {character.gender && (
            <Badge variant="secondary">{character.gender}</Badge>
          )}
          {isDead && <Badge variant="destructive">Deceased</Badge>}
        </div>
      </CardHeader>

      <CardContent className="space-y-2 text-sm">
        {character.culture && (
          <p>
            <b>Culture:</b> {character.culture}
          </p>
        )}

        {character.titles?.length > 0 && (
          <p>
            <b>Titles:</b> {character.titles.join(", ")}
          </p>
        )}

        {character.allegiances?.length > 0 && (
          <p className="text-muted-foreground">
            Allegiances: {character.allegiances.length}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default CharacterCard;
