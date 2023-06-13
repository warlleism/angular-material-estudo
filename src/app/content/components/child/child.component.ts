import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  bolean = false

  @Input() userName: string = '';
  @Input() title: string = '';
  @Input() userData!: { email: string, role: string };

}
