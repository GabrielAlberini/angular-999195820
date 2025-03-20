import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
  <footer>
    <h1>UTN | 2025</h1>
    <p>
      Sitio desarrollado por UTN
    </p>
  </footer>
  `,
  styles: `
  h1 {
    color: violet;
  }
  footer {
    padding: 10px;
    background-color: black;
    color: white;
    text-align: center;
  }
  `
})

export class FooterComponent {
}
