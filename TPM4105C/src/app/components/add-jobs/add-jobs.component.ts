import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { debounceTime, Observable, of } from 'rxjs';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-add-jobs',
  templateUrl: './add-jobs.component.html',
  styleUrls: ['./add-jobs.component.css']
})
export class AddJobsComponent implements OnInit {
  Title=new FormControl('',Validators.required);
  Description =new FormControl('',Validators.required);
  Salary = new FormControl('');
  DateOfPublish =new FormControl('');
  Location = new FormControl('');
  

  constructor(private fb : FormBuilder, private js : JobsService) { 
    
  }

  titleGroup = this.fb.group({
    Title: this.Title,
    Description: this.Description,
    Salary :this.Salary,
    DateOfPublish : this.DateOfPublish,
    Location : this.Location,

  });
  
  ngOnInit(): void {
   
  }
  onSubmit(){
    console.log(this.titleGroup.value);
    this.js.setJobs(this.titleGroup.value);
    
  }
}
