import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import HouseName from "./HouseName";

test("house Link component displays proper text", async () => {
  const petyrLink = "https://www.anapioficeandfire.com/api/houses/823";

  const { getByText } = await render(<HouseName link={petyrLink} />);

  await expect.element(getByText("Petyr Baelish")).toBeInTheDocument();
});

test("houseName without name", async () => {
  const unnamedLink = "https://www.anapioficeandfire.com/api/houses/3";
  const { getByText } = await render(<HouseName link={unnamedLink} />);

  await expect.element(getByText("Unnamed house #3")).toBeInTheDocument();
});
