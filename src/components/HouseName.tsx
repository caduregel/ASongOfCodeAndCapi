import { fetcher } from "@/lib/swrFetcher";
import { getIdFromUrl } from "@/lib/utils";
// import { getIdFromUrl } from "@/lib/utils";
import useSWR from "swr";


// Just like CharacterName but for Houses
type HouseNameProps = {
  link: string;
  isLink?: boolean;
};
    
function HouseName({ link, isLink = true }: HouseNameProps) {
  // beetje overfetching, mis graphql beter haha
  const { data: house, error, isLoading } = useSWR(link, fetcher);

  const houseId = getIdFromUrl(link);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error getting character</span>;

  if (isLink === false) {
    return <span>{house.name || `unnamed house #${houseId}`}</span>;
  }
  return (
    <a href={`/house/${houseId}`} className="underline">
      {house.name || `unnamed house #${houseId}`}
    </a>
  );
}

export default HouseName;
