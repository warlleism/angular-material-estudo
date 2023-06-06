import { Component } from '@angular/core';

@Component({
  selector: 'app-emiter',
  templateUrl: './emiter.component.html',
  styleUrls: ['./emiter.component.css']
})
export class EmiterComponent {

  number = 5;

  onChangeNumber() {
    this.number = this.number + 1
  }

}
