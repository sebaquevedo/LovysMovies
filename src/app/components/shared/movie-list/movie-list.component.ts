import {AfterViewInit,OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MoviesServiceService } from 'src/app/services/movies-service.service';
import { IMovie,IMovieResult } from './movie-list.model';

@Component({
  selector: 'app-movie-list',
  styleUrls: ['movie-list.component.scss'],
  templateUrl: 'movie-list.component.html',
})
export class MovieListComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['id', 'name', 'origin_country', 'vote_average'];
  dataSource = new MatTableDataSource<IMovie>([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(
    (res: IMovieResult ) =>
    {
      this.dataSource = new MatTableDataSource(res.results);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } ,
    (err) => console.log(err)
    );
  }

  constructor(private movieService: MoviesServiceService){}
}




