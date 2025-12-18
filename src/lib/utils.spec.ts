import { describe, test } from "vitest";

describe("getIdFromURL spec", () => {
  test("should extract ID from URL correctly", () => {
    const getIdFromUrl = (url: string) => url.split("/").pop();
    const url = "https://www.anapioficeandfire.com/api/characters/823";
    const id = getIdFromUrl(url);
    if (id !== "823") {
      throw new Error(`Expected ID to be '823', but got '${id}'`);
    }
  });
});
