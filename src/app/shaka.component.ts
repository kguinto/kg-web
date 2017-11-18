import {Component} from '@angular/core';

@Component({
  selector: 'lml-shaka',
  template: `<span style="color: #c68c53" (mousemove) ="mouseEnter()"  (mouseleave)="mouseLeave()">{{text}}</span> 
`,
})
export class ShakaComponent {
   text = "l.ml   "

   mouseEnter(){
      this.text = "🤙🏽 \xa0\xa0"
   }

   mouseLeave(){
      this.text = "l.ml"
   }
}
