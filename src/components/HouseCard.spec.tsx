import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import HouseCard from "./HouseCard";

test("House Card component should render correctly", async () => {
  const exampleHouse = {
    url: "https://www.anapioficeandfire.com/api/houses/15",
    name: "House Baratheon of Dragonstone",
    region: "The Crownlands",
    coatOfArms:
      "Or, a heart gules enflamed proper charged with a stag's head sable crowned of the field",
    words: "",
    titles: ["Lord of Dragonstone", "King of Westeros"],
    seats: ["Dragonstone"],
    currentLord: "https://www.anapioficeandfire.com/api/characters/1963",
    heir: "https://www.anapioficeandfire.com/api/characters/975",
    overlord: "https://www.anapioficeandfire.com/api/houses/16",
    founded: "284 AC",
    founder: "https://www.anapioficeandfire.com/api/characters/1963",
    diedOut: "",
    ancestralWeapons: [],
    cadetBranches: [],
    swornMembers: [
      "https://www.anapioficeandfire.com/api/characters/3",
      "https://www.anapioficeandfire.com/api/characters/7",
    ],
  };

  const { getByText } = await render(<HouseCard house={exampleHouse} />);

  // expect house name to be rendered
  await expect.element(getByText("House Baratheon of Dragonstone")).toBeInTheDocument();

  // expect Words: to not be rendered since it's empty
  await expect.element(getByText("Words:")).not.toBeInTheDocument();
});
