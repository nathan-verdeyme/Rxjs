import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruit } from '../fruit';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  constructor(private fs : FruitService) { }
  fruitList: Observable<Fruit[]> = ;
  ngOnInit(): void {
    this.fruitList = this.fs.retrieveFruit();
  }

}
