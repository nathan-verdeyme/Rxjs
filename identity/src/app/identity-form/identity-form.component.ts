import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, Observable, of } from 'rxjs';

@Component({
  selector: 'app-identity-form',
  templateUrl: './identity-form.component.html',
  styleUrls: ['./identity-form.component.css']
})
export class IdentityFormComponent implements OnInit {
  private static readonly DELAY = 3000;
  firstname = new FormControl('');
  lastname = new FormControl('',Validators.required);
  zip = new FormControl('',Validators.pattern('[0-9]{5}'));
  city = new FormControl('');
  countryList = ["France","Allemagne","Italie","Espagne","Angletterre"];

  inputFirstname$: Observable<string> | undefined;
  historiqueSaisi? : string[] = [];

  constructor(private formBuilder : FormBuilder) {
   }
  addressGroup = this.formBuilder.group({
    street: [''],
    zip : [''],
    city :[''],
    country:['']
  });

  identityGroup = new FormGroup({
    firstname : this.firstname,
  lastname : this.lastname,
  addressGroup : this.addressGroup
  });

  ngOnInit(): void { 
    this.inputFirstname$ =of('');
    this.inputFirstname$ = this.firstname.valueChanges
    .pipe(
      debounceTime(IdentityFormComponent.DELAY)
    );
    this.inputFirstname$.subscribe((data)=>{
    debounceTime(IdentityFormComponent.DELAY)
    this.historiqueSaisi?.push(data);
    })
  }
  
  onSubmit(){
    console.log(this.identityGroup.value);
   
  }

}
