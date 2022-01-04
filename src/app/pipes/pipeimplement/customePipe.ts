import { Pipe, PipeTransform } from "@angular/core";




@Pipe({
  name:'ashraf'
})
export class PipeImplementation implements PipeTransform
{
  transform(value:string,data:string)
  {
    return data+value;

  }
}
