import { Books } from './../interfaces/books';
import { BooksService } from './../books.service';
import { Component  } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  trendingBooks: Books[]=[];
  dataSource:any
  constructor(_booksService: BooksService) { _booksService.getTrending().subscribe((data)=>{
    console.log(data.works)
    this.trendingBooks = data.works;
    this.dataSource = new MatTableDataSource(this.trendingBooks)
  }) }
  displayedColumns: string[] = ['title', 'author', 'first_publish_year'];
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
