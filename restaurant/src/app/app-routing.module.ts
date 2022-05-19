import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishComponent } from './dish/dish.component';
import { DishesComponent } from './dishes/dishes.component';
import { FoodComponent } from './food/food.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [

  {
    path: 'carte',
    component:FoodComponent,
    children:[
      {
        path: 'menu',
        component:MenuComponent,
      },
      {
        path: 'plat',
        component:DishesComponent,
        children:[
          {
          path:':id',
          component:DishComponent,
          }
        ]
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
