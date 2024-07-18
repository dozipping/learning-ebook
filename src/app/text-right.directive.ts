import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextRight]',
  standalone: true
})
export class TextRightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.textAlign='right';
   }
   @HostListener('mouseenter')
   onMouseEnter(){this.moveLeft('left');}
   @HostListener('mouseleave')
   onMouseLeave(){this.moveLeft('right');}
   private moveLeft(move:string){
    this.el.nativeElement.style.textAlign=move;
   }

}
