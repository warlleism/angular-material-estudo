import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chamge-number',
  templateUrl: './chamge-number.component.html',
  styleUrls: ['./chamge-number.component.css']
})
export class ChamgeNumberComponent {

  @Output() changeNumber: EventEmitter<any>  = new EventEmitter()

  handleClick(){
   this.changeNumber.emit()
  }

}
