import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})


export class DiretivasComponent {

  size = 40;
  font = 'Arial';
  boll: boolean = false;
  titleClass!: string;
  classes: string[] = []


  handlerBoll(event: boolean) {

    this.classes = []

    event ? this.classes.push("green-title") : this.classes.push("black-title")

    this.boll = event

  }


}
