import { Component, ViewEncapsulation } from '@angular/core';
const API = import.meta.env.VITE_API_BASE_URL;

@Component({
  selector: 'app',
  standalone: true,
  templateUrl: './template.html',
  styleUrl: './styles.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  title = 'app works';
  be = ''

  constructor() {
    this.test()
  }

  test() {
    fetch(`${API}/api/hello`)
      .then(r => r.json())
      .then(r => {
        this.be = r.message;
      });
  }
}
