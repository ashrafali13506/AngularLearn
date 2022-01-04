import { Injectable } from '@angular/core';
import { Country } from './c1/country';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {



  constructor() { }

  getCountries()
  {
    return [new Country(1,"India"),
new Country(2,"USA")  ,];
}
}
