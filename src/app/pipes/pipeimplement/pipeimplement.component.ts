import { Component, OnInit } from '@angular/core';

import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { TestService } from 'src/app/services/test.service';


@Component({
  selector: 'app-pipeimplement',
  templateUrl: './pipeimplement.component.html',

})
export class PipeimplementComponent implements OnInit {
  currentDate:Date;
  promiseData:any;
  // date$=interval(1000).pipe(map(x=>new Date()),take(10))

  $setPromise=new Promise((resolve,reject)=>{
    setInterval(()=>{
      resolve(new Date())
    },1000)
  })
  result:any;

  constructor(private test:TestService) {

     this.currentDate=new Date();


  }

  ngOnInit(): void {
    this.$setPromise.then((data)=>{

      this.result=data;


    })





  }

  getPromiseValue()
  {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{resolve("PromiseCompleted")},3000)
    });
  }
}
