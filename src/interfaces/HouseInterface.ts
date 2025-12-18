export interface IHouse {
    url: string;
    name: string;
    region: string | null;
    coatOfArms: string | null;
    words: string | null;
    titles: string[];
    seats: string[];
    currentLord: string | null;
    heir: string | null;
    overlord: string | null;
    founded: string | null;
    founder: string | null;
    diedOut: string | null;
    ancestralWeapons: string[];
    cadetBranches: string[];
    swornMembers: string[];
}
