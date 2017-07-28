import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ selector: '[z-index]' })
export class zIndexDirective {

  constructor( private el:ElementRef ){
    console.log("Directive called");
  }

  // @Input("z-index") zindex:number;
  //
  // @HostListener('mouseenter') mouseEntro(){
  //   console.log("mouseEntro");
  //   this.zIndex( this.zindex || 5 );
  // }
  //
  // @HostListener('mouseleave') mouseSalio(){
  //   console.log("mouseSalio");
  //   this.zIndex( this.zindex || 0 );
  // }
  //
  // private zIndex( num:number ){
  //   this.el.nativeElement.style.position = "relative";
  //   this.el.nativeElement.style.zIndex = num;
  // }

}
