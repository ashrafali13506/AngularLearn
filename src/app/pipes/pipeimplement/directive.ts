import { Directive, ElementRef } from "@angular/core";




@Directive({
  selector:`[customeDirective]`
})

export class customeDirective
{

  constructor(private el:ElementRef)
  {
    this.el.nativeElement.style.backgroundColor="red";
  }

}
