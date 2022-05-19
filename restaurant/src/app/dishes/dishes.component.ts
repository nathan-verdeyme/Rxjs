import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dish } from '../dish';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  constructor(private dishService: DishService) { }
  dish$?: Observable<string[]>;
  ngOnInit(): void {
    this.dish$= this.dishService.getDishesNames();
  }

}
