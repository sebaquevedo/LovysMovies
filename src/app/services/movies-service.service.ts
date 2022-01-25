import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovieResult } from '../components/shared/movie-list/movie-list.model';

const ALL_MOVIES = 'https://api.themoviedb.org/3/trending/tv/day?api_key=0f60ad592a39d4b497a0d8889bba1be2';

@Injectable({
  providedIn: 'root'
})
export class MoviesServiceService {
  configUrl = 'assets/config.json';
  constructor(private http: HttpClient) { }

getMovies():Observable<IMovieResult>{
  return this.http.get<IMovieResult>(ALL_MOVIES);
}


}
