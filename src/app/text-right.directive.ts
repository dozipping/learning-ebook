import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextRight]',
  standalone: true
})
export class TextRightDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.textAlign='center';
   }
   @HostListener('mouseenter')
   onMouseEnter(){this.moveLeft('left');}
   @HostListener('mouseleave')
   onMouseLeave(){this.moveleft('right');}
   private moveLeft(move:string){
    this.el.nativeElement.style.textAlign=move;
   }

}
