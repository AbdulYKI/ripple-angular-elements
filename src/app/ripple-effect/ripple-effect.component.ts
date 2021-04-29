import { Component, OnInit } from '@angular/core';
import { DummyService } from '../dummy.service';

@Component({
  selector: 'app-ripple-effect',
  templateUrl: './ripple-effect.component.html',
  styleUrls: ['./ripple-effect.component.scss'],
})
export class RippleEffectComponent {
  clicks: any[] = [];
  name = 'Angular';

  constructor(private dummyService: DummyService) {}

  onclick($event) {
    var i = this.clicks.push({
      x: (
        $event.clientX - $event.target.getBoundingClientRect().left
      ).toString(),
      y: (
        $event.clientY - $event.target.getBoundingClientRect().top
      ).toString(),
    });
    setTimeout(() => {
      console.log(i);
      this.clicks.splice(0, 1);
    }, 4000);
  }

  onclickOfSpan($event, c) {
    $event.stopPropagation();
    var i = this.clicks.push(c);
    setTimeout(() => {
      console.log(i);
      this.clicks.splice(0, 1);
    }, 4000);
  }
  spanStyle(c: any) {
    var styleString: string = `position:absolute; left:${c.x}px; top:${c.y}px`;
    return styleString;
  }

  printDummyData() {
    this.dummyService.getDummyData().subscribe((data) => {
      console.log(data);
    });
  }
}
