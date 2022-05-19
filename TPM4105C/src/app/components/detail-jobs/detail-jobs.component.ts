import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Jobs } from 'src/app/models/jobs';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-detail-jobs',
  templateUrl: './detail-jobs.component.html',
  styleUrls: ['./detail-jobs.component.css']
})
export class DetailJobsComponent implements OnInit {

  constructor(private jobsService : JobsService) { }
  

  jobs: Observable<Jobs[]>=of();
  ngOnInit(): void {
    //this.jobs= this.jobsService.getJobsById(this.id.value);
  }

}
