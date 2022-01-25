import { identifierModuleUrl } from "@angular/compiler";

    export interface IMovie {
        original_name: string;
        original_language: string;
        id: number;
        poster_path: string;
        vote_average: number;
        name: string;
        overview: string;
        first_air_date: string;
        vote_count: number;
        backdrop_path: string;
        origin_country: string[];
        genre_ids: number[];
        popularity: number;
        media_type: string;
    }



    export interface IMovieResult {
        page: number;
        results: IMovie[];
        total_pages: number;
        total_results: number;
    }



