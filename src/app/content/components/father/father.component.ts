import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent {

  constructor() { }

  userName: string = 'warlleism'
  userData = { email: 'warlleimartins@outlook.com', role: 'Admin' }
  title: string = 'Curso angular'


}
