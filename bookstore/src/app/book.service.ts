import { Injectable } from '@angular/core';
import { delay, interval, Observable, of } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  val =interval(3000);
  service = this.val.subscribe(x => console.log(x));
  constructor() { }

  private readonly books = [
    new Book("1984","George Orwell",1949),
    new Book("Le Meilleur des Mondes", "Aldous Huxley", 1932),
    new Book("Knock", "Jules Romains", 1923),
  ]
  private static readonly DELAY = 3000;


  getBooks(): Observable<Book[]>{
    return of(this.books)
    .pipe(
      delay(BookService.DELAY)
    );
  }
}
