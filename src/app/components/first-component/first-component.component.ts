import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  canShow: boolean = false;

  handlerValue() {
    this.canShow = !this.canShow
  }

  constructor() { }

  ngOnInit(): void { }
}
