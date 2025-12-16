import { fetcher } from "@/lib/swrFetcher";
import { useParams, Link } from "react-router";
import useSWR from "swr";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import CharacterLink from "@/components/CharacterLink";

function HousePage() {
  const { houseid } = useParams();

  const {
    data: house,
    error,
    isLoading,
  } = useSWR(
    `https://www.anapioficeandfire.com/api/houses/${houseid}`,
    fetcher
  );

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error || !house) return <div className="p-6">Failed to load house</div>;

  const getIdFromUrl = (url: string) => url.split("/").pop();

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{house.name}</CardTitle>
          <div className="flex gap-2 mt-2">
            {house.region && <Badge variant="secondary">{house.region}</Badge>}
            {house.diedOut && <Badge variant="destructive">Died out</Badge>}
          </div>
        </CardHeader>
        {house.coatOfArms && (
          <CardContent className="text-sm text-muted-foreground">
            <b>Coat of Arms:</b> {house.coatOfArms}
          </CardContent>
        )}
      </Card>

      {/* Core Information */}
      <Card>
        <CardHeader>
          <CardTitle>House Details</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 text-sm">
          {house.words && (
            <p>
              <b>Words:</b> {house.words}
            </p>
          )}
          {house.founded && (
            <p>
              <b>Founded:</b> {house.founded}
            </p>
          )}
          {house.seats.length > 0 && (
            <p>
              <b>Seats:</b> {house.seats.join(", ")}
            </p>
          )}
          {house.titles.length > 0 && (
            <p>
              <b>Titles:</b> {house.titles.join(", ")}
            </p>
          )}
        </CardContent>
      </Card>

      {/* Leadership */}
      <Card>
        <CardHeader>
          <CardTitle>Leadership</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          {house.currentLord && (
            <p>
              <b>Current Lord:</b> <CharacterLink link={house.currentLord} />
            </p>
          )}
          {house.heir && (
            <p>
              <b>Heir:</b> <CharacterLink link={house.heir} />
            </p>
          )}
          {house.overlord && (
            <p>
              <b>Overlord:</b> <CharacterLink link={house.overlord} />
            </p>
          )}
        </CardContent>
      </Card>

      {/* Sworn Members */}
      {house.swornMembers.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Sworn Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {house.swornMembers.slice(0, 12).map((member: string) => {
                console.log(member)
                return(
                <Badge variant="outline">
                  <CharacterLink link={member} />
                </Badge>)
              })}
            </div>

            {house.swornMembers.length > 12 && (
              <>
                <Separator className="my-4" />
                <p className="text-sm text-muted-foreground">
                  + {house.swornMembers.length - 12} more members
                </p>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default HousePage;
