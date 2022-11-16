import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAutoComplete]'
})
export class AutoCompleteDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { console.log(el); }
  @Input() searchTerm: any;
  @HostListener('keyup') kishan() {
    console.log(this.searchTerm);
  }
}
