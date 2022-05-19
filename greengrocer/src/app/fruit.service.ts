import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, delay, Observable, of, tap } from 'rxjs';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {


  constructor(private http :HttpClient ) { }

  private static readonly url = 'api/fruit';
  private static readonly httpOptions = {
    headers : new HttpHeaders({'Content-Type':'application/json'})
  };
  private static readonly DELAY = 3000;

  retrieveFruit():Observable<Fruit[]>{
    return this.http.get<Fruit[]>(FruitService.url)
    .pipe(
      tap(_ => console.log('FruitService - retrieveFruit()')),
      delay(FruitService.DELAY),
      catchError(error => {console.log(error); return of([]);})
    );
  }

  createFruit(fruit: Fruit):Observable<Fruit>{
    return this.http.post<Fruit>(FruitService.url, fruit,FruitService.httpOptions)
    .pipe(
      tap(_ => console.log('FruitService - retrieveFruit()')),
      delay(FruitService.DELAY),
      catchError(error => {console.log(error); return of([]);})
    );
  }
}
