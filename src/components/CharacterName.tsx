import { fetcher } from "@/lib/swrFetcher";
import { getIdFromUrl } from "@/lib/utils";
// import { getIdFromUrl } from "@/lib/utils";
import useSWR from "swr";

// A component for displaying a character's name, optionally as a link to their detail page
// Used for components that display lists of characters, but only have access to the character API URL
type CharacterNameProps = {
  link: string;
  isLink?: boolean;
};

function CharacterName({ link, isLink = true }: CharacterNameProps) {
  // beetje overfetching, mis graphql beter haha
  const { data: character, error, isLoading } = useSWR(link, fetcher);

  const characterId = getIdFromUrl(link);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error getting character</span>;

  const displayName =
    character.name || character.aliases?.[0] || "Unknown character";

  if (isLink === false) {
    return <span>{displayName}</span>;
  }
  return (
    <a href={`/character/${characterId}`} className="underline">
      {displayName}
    </a>
  );
}

export default CharacterName;
