import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, Observable, pluck } from 'rxjs';
import { Dish } from '../dish';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  selectedDishName$:Observable<string> | undefined;
  dis$!: Observable<Dish | undefined>; 



  constructor(private route : ActivatedRoute, private dishService : DishService) {
    this.route=route
   }
  
  ngOnInit(): void {
    this.selectedDishName$= this.route.params
    
    .pipe(
      pluck('id')
    );
      this.dis$ = this.selectedDishName$.pipe(
        mergeMap((x:string)=>this.dishService.getDish(x))
      )
    
  }

}
