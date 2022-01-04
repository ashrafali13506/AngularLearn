import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from './test';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private test: TestService) {}

cities:any;

  ngOnInit() {

  }


countryLit=[{name:"India",city:['Chennai','Mumbai','Kolkatta']},
{name:"USA",city:['WashingTon','NY','NewJersy']},
{name:"CANADA",city:['Toronto','Mitkisia','monocosia']},
{name:"Pak",city:['Karachi','Lahore','UAE']}]


changeCountry(count: any)
{
  this.cities=this.countryLit.find(con=>con.name==count.target.value)?.city;


}

}
