import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, pluck } from 'rxjs';
import { Jobs } from 'src/app/models/jobs';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})
export class ListJobsComponent implements OnInit {
  selectedJobID$:Observable<number> | undefined;
  constructor(private jobsService : JobsService, private route : ActivatedRoute) {
    this.route=route
   }
  

  jobs: Observable<Jobs[]>=of();
  ngOnInit(): void {
    this.jobs= this.jobsService.getJobs();
    this.selectedJobID$= this.route.params
    
    .pipe(
      pluck('id')
    );
  }

  onSubmit():void{
    this.jobs= this.jobsService.getJobs();
  }

}
