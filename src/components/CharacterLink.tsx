import { fetcher } from "@/lib/swrFetcher";
import { getIdFromUrl } from "@/lib/utils";
import useSWR from "swr";

function CharacterLink({ link }: { link: string }) {
  // beetje overfetching, mis graphql beter haha
  const characterId = getIdFromUrl(link);
  const {
    data: character,
    error,
    isLoading,
  } = useSWR(
    `https://www.anapioficeandfire.com/api/characters/${characterId}`,
    fetcher
  );

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error getting character</span>;

  return (
    <a href={`/character/${characterId}`} className="underline">
      {character.name || `unnamed character #${characterId}`}
    </a>
  );
}

export default CharacterLink;
