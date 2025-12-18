import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import CharacterName from "./CharacterName";

test("Character Link component displays proper text", async () => {
  const petyrLink = "https://www.anapioficeandfire.com/api/characters/823";

  const { getByText } = await render(<CharacterName link={petyrLink} />);

  await expect.element(getByText("Petyr Baelish")).toBeInTheDocument();
});

test("CharacterName without name", async () => {
  const unnamedLink = "https://www.anapioficeandfire.com/api/characters/3";
  const { getByText } = await render(<CharacterName link={unnamedLink} />);

  await expect.element(getByText("Unnamed Character #3")).toBeInTheDocument();
});
