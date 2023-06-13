import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {

  show: boolean = true
  text1: string = ''
  text2: string = ''

  getEvent(value: Event): void {
    const target = value.target as HTMLInputElement;
    this.text1 = target.value;
  }

  //Ou

  getEvent2({ target }: Event): void {
    this.text2 = (target as HTMLInputElement).value;
  }

  showMenssage(): void {
    this.show = !this.show
  }
}
