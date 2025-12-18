import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import CharacterCard from "./CharacterCard";

test("Character Card component should render correctly", async () => {
  const exampleCharacter = {
    url: "https://www.anapioficeandfire.com/api/characters/583",
    name: "Jon Snow",
    gender: "Male",
    culture: "Northmen",
    born: "In 283 AC",
    died: "",
    titles: ["Lord Commander of the Night's Watch"],
    aliases: ["Lord Snow"],
    allegiances: ["https://www.anapioficeandfire.com/api/houses/362"],
  };

  const { getByText } = await render(
    <CharacterCard character={exampleCharacter} />
  );

  await expect.element(getByText("Jon Snow")).toBeInTheDocument();

  // should render title
  await expect
    .element(getByText("Titles: Lord Commander of the Night's Watch"))
    .toBeInTheDocument();

  // should not render Deceased badge
  await expect.element(getByText("Deceased")).not.toBeInTheDocument();
});