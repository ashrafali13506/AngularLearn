import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-dropdownusingservice',
  templateUrl: './dropdownusingservice.component.html',
  styleUrls: ['./dropdownusingservice.component.scss']
})
export class DropdownusingserviceComponent implements OnInit {

  states:Array<any>=[];
  cities:Array<any>=[];

  constructor(private comm:CommunicationService) { }

  ngOnInit(): void {
    this.getStatesfromService();

  }

  getStatesfromService()
  {
    this.states=this.comm.getStates()

  }
  getCity()
  {
    this.cities=this.comm.getCity()
  }

  updateCity(selectedState:any)
  {
    let id=selectedState.target.value;
    console.log(id);

    this.cities=this.comm.getCity().filter(data=> data.id==id);
    console.log(this.cities);

  }



}
