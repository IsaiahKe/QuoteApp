import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {
  constructor() { }
  @Input() appHighlight = '';
  

}
