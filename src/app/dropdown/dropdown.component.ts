import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',

})
export class DropdownComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  myForm: FormGroup;;

  countries:string[]=["India","USA","AUS"];
  states:string[]=[];
  indStates:string[]=["TN","KEL","MH"]
  usaStates:string[]=["NY","NJ","WSHTN"]
  ausStates:string[]=["Mel","syd","can"]

  ngOnInit(): void {

    this.myForm=this.fb.group({
      name:[''],
      state:[''],
      city:['']
    })
  }


  updateDate()
  {
    alert(this.myForm.value.state)

  }

  updateStates(stateName: any)
  {
    switch(stateName.value)
   { case 'India':
      this.states=this.indStates;
      break;

    case 'USA':
    this.states=this.usaStates;
    break;

    case 'AUS':
    this.states=this.ausStates;
    break;
    default:
      this.states=[];
      break;

  }

  }

}
