import { MarvelCharacter } from "./MarvelCharacter";

export interface MarvelPage {
    offset: number,
    limit: number,
    total: number,
    count: number,
    results: MarvelCharacter[];
}