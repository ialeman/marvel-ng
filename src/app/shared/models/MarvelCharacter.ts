import { MarvelThumbnail } from "./MarvelThumbnail";

export interface MarvelCharacter {
    id: number;
	name: string;
	description: string;
	modified: Date;
	thumbnail: MarvelThumbnail;
	resourceURI: string;
	// comics: MarvelComics ;
	// series: MarvelSeries;
    // stories: MarvelStories;
    // events: MarvelEvents;
    // urls: Url[];
}