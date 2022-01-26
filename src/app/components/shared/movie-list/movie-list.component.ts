import {AfterViewInit,OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MoviesServiceService } from 'src/app/services/movies-service.service';
import { IGenre, IMovie,IMovieResult } from './movie-list.model';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  styleUrls: ['movie-list.component.scss'],
  templateUrl: 'movie-list.component.html',
})
export class MovieListComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'original_title', 'popularity', 'vote_average'];
  dataSource = new MatTableDataSource<IMovie>([]);
  originalDataSource :IMovie[] = [];
  genresDataSource: IGenre[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    const joinedWithObjectForm$ = forkJoin({
      movies: this.movieService.getMoviesbyGenres(),
      genresResult: this.movieService.getGenres()
    }).subscribe(
      ({movies,genresResult}) => {
        this.originalDataSource = movies.results;
        this.init(movies.results);
        this.genresDataSource = genresResult.genres
      }
    );

  }

  init(dataSource:IMovie[]){
    this.dataSource = new MatTableDataSource(dataSource);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

 applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    const filteredIdGenres = this.genresDataSource
          .filter(element => element.name === filterValue)
          .map(element => element.id);
    const filteredDataSource =  this.originalDataSource.filter(element =>{
      return  filteredIdGenres.some(r=> element.genre_ids.includes(r));

    });

    this.init(filteredDataSource);

  }

  constructor(private movieService: MoviesServiceService){}
}




