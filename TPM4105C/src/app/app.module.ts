import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListJobsComponent } from './components/list-jobs/list-jobs.component';
import { AddJobsComponent } from './components/add-jobs/add-jobs.component';
import { DetailJobsComponent } from './components/detail-jobs/detail-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    ListJobsComponent,
    AddJobsComponent,
    DetailJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
