import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[pwHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') bgColor;

  /*
  constructor(private hostElement: ElementRef) {
    console.log(this.hostElement);
    // hostElement.nativeElement.style.backgroundColor = 'yellow';
  }
  */

  @HostListener('mouseover')
  mouseOver() {
    this.bgColor = 'yellow';
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.bgColor = '';
  }
}
