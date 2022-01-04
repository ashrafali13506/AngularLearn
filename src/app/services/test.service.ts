import { Injectable } from '@angular/core';
import { TestModule } from '../modules/test/test.module';
import {HttpClient} from '@angular/common/http'
import { of } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class TestService {
  private employeeUrl= "http://localhost:3000/employees";

  constructor(private http:HttpClient) {

  }
  fetchEmployeeDetails()
  {
    return this.http.get(`${this.employeeUrl}`)

  }

  asyncTest()
  {
    return of([{name:"Ash"}
    ,{name:"Raf"},
  {name:"Ali"},
  {name:"Khan"}
])
  }
}
