import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CommunicationService {


  getStates()
  {
    return [{
      id:1,
      name:"TN"
    },
    {
      id:2,
      name:"KL"
    },
    {
      id:3,
      name:"KAR"
    },
    {
      id:4,
      name:"MH"
    }]
  }


  getCity()
  {
    return [{
      id:1,
      name:"CHN"
    },
    {
      id:1,
      name:"MADURAI"
    },
    {
      id:1,
      name:"TRICHY"
    },
    {
      id:2,
      name:"TRIVANDRAM"
    },{
      id:2,
      name:"MOONAR"
    },{
      id:2,
      name:"COCHIN"
    },
    {
      id:3,
      name:"Bangalore"
    },
    {
      id:3,
      name:"KRPuram"
    },
    {
      id:3,
      name:"Marthali"
    },
    {
      id:3,
      name:"KSR"
    },
    {
      id:4,
      name:"Mum"
    },
    {
      id:4,
      name:"Pune"
    },
    {
      id:4,
      name:"Thane"
    }

  ]
  }



  constructor() { }
}
