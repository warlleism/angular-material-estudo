import { Component } from '@angular/core';
import { IAnimal } from 'src/app/interfaces/IAnimal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  lista: IAnimal[] = [
    { name: 'Gato', type: 'Felino', age: 20 },
    { name: 'Cachorro', type: 'Canino', age: 13 },
    { name: 'Cobra', type: 'Serpente', age: 10 },
    { name: 'Peixe', type: 'Marinho', age: 5 },
  ]

  animalDetails!: string;

  showAnimal(animal: IAnimal) {
    this.animalDetails = `O pet é um ${animal.name}, do tipo ${animal.type}`
  }


}
