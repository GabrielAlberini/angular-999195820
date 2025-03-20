import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-main',
  imports: [CardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  selectedItem = ""

  items = [
    { id: "1", name: "a" },
    { id: "1", name: "a" },
    { id: "1", name: "a" },
    { id: "1", name: "a" },
  ]

  // saludar(id) {
  //   alert(`Hola ${id}`)
  // }

  saludar() {
    alert(`Hola ${this.selectedItem}`)
  }
}
