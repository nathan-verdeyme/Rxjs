import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailJobsComponent } from './components/detail-jobs/detail-jobs.component';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';

const routes: Routes = [
  {
    path:'',
    component : ListJobsComponent
  },
  {
    path:'id',
    component : DetailJobsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
