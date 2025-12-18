import type { IHouse } from "@/interfaces/HouseInterface";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import CharacterName from "./CharacterName";
// import { Link } from "react-router";

type HouseCardProps = {
  house: IHouse;
};

// Displays a house based on the HouseInterface data, gotten from anApiOfIceAndFire
function HouseCard({ house }: HouseCardProps) {
  const houseId = house.url.split("/").pop();

  return (
    <a
      href={`/house/${houseId}`}
      className="hover:scale-[1.05] transition-transform"
    >
      <Card className="min-h-80">
        <CardHeader>
          <CardTitle className="text-lg font-bold">{house.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1">
          <p>
            <b>Region:</b> {house.region || "Unknown"}
          </p>
          {house.words && (
            <p>
              <b>Words:</b> {house.words}
            </p>
          )}
          {house.titles.length > 0 && (
            <p>
              <b>Titles:</b> {house.titles.join(", ")}
            </p>
          )}
          {house.seats.length > 0 && (
            <p>
              <b>Seats:</b> {house.seats.join(", ")}
            </p>
          )}
          {house.currentLord && (
            <p>
              <b>Current Lord:</b>{" "}
              <CharacterName link={house.currentLord} isLink={false} />
            </p>
          )}
          {house.heir && (
            <p>
              <CharacterName link={house.heir} isLink={false} />{" "}
            </p>
          )}
          {house.founded && (
            <p>
              <b>Founded:</b> {house.founded}
            </p>
          )}
          {house.diedOut && (
            <p>
              <b>Died Out:</b> {house.diedOut}
            </p>
          )}
        </CardContent>
      </Card>
    </a>
  );
}

export default HouseCard;
