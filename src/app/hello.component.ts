import { Component, Input } from '@angular/core';

@Component({
  selector: '',
  template: '',
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}

//Unused