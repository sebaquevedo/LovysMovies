import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGenreResult, IMovieResult } from '../components/shared/movie-list/movie-list.model';

const ALL_MOVIES_GENRES = 'https://api.themoviedb.org/3/discover/movie?api_key=0f60ad592a39d4b497a0d8889bba1be2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=';
const ALL_GENRES = 'https://api.themoviedb.org/3/genre/movie/list?api_key=0f60ad592a39d4b497a0d8889bba1be2&language=en-US';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  configUrl = 'assets/config.json';
  constructor(private http: HttpClient) { }

getMoviesbyGenres():Observable<IMovieResult>{
  return this.http.get<IMovieResult>(ALL_MOVIES_GENRES);
}

getGenres():Observable<IGenreResult>{
  return this.http.get<IGenreResult>(ALL_GENRES);
}


}
