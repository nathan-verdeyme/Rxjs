import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class FruitDataService implements InMemoryDbService {
  createDb() {
      const fruit = [
          {id:1, name: 'ananas', price: 3.49},
          {id:2, name: 'kaki', price: 2.99},
          {id:3, name: 'poire', price: 1.99},
      ]; 
      return {fruit};
  }
}
