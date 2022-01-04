import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { from, fromEvent, interval, Observable, timer } from 'rxjs';
import {concatMap, filter, map, pluck, take} from 'rxjs/operators';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
})
export class demoComponent implements OnInit {

  queryParams={id:'',username:''};
  constructor(private activate:ActivatedRoute)
  {
    activate.params.subscribe(data=>{

      this.queryParams.id=data.id;
      this.queryParams.username=data.username;


    })

  }


  obs$!: Observable<any>;

  Name:Array<string>=[];
  // promise = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('Value Emitted');
  //   }, 1000);
  // });

  promise=new Promise((resolve,reject)=>{
    resolve(()=>{
      return fetch('https://jsonplaceholder.typicode.com/todos/1')
    })
  })
  ngOnInit()


  {

    const result=interval(500).
    pipe(take(10),
    map(data=>data*2))



    // const click=fromEvent(document,'click');
    //  const concatmap= click.pipe(concatMap(ev=>interval(1000).pipe(take(10))))


    const user=[{age:42,name:"Ashraf"},{age:34,name:"Ali"}]

    from(user).pipe(
      pluck("name"),
      map(name=>name.toUpperCase(),
      pluck("age"),
      )
      ).subscribe(console.log)


  }


  //conCatMap



  Onclick() {
    console.log('Method started');
    this.promise.then(console.log)
  }

  users = {
    firstName: 'Ashraf',
    lastName: 'Ali',
  };

  source = './assets/SSLC.jpeg';


createOservable()
{
//   this.obs$=new Observable(observer=>{
//     setTimeout(()=>{observer.next("First Package");
// },1000)
//     setTimeout(()=>{observer.next("Second Package")},2000)
//     setTimeout(()=>{observer.next("Third Package")},4000)
//   })

this.obs$=new Observable(observer=>{
setInterval(()=>{
  observer.next(Math.random()*100)
},3000)

})


}

consumeObservable()
{
  this.createOservable();
  this.obs$.subscribe({
    next:(data:string)=>{
      this.Name.push(data);
    }
  })


}
}

