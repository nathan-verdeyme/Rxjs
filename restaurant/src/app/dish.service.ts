import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { Dish } from './dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  private readonly dishes = new Map([
    ["aïoli", new Dish("aïoli", "provençal",16)],
    ["cassoulet", new Dish("cassoulet", "méridonial",18)],
    ["choucroute", new Dish("choucroute","alsacien",19)],

]);
private static readonly DELAY = 3000;


getDishesNames():Observable<string[]>{
  return of(Array.from(this.dishes.keys()))
  .pipe(
    delay(DishService.DELAY)
  );
}

  getDish(nom : string):Observable<Dish|undefined>{
    if (this.dishes.get(nom) == undefined){
        return of(undefined).pipe(
          delay(DishService.DELAY)
        )
    }else{
    return of(this.dishes.get(nom))
    .pipe(
      delay(DishService.DELAY)
    )
    };

}
}


