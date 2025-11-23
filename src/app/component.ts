import { Component, ViewEncapsulation } from '@angular/core';

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
    this.test(1)
  }

  test(x: number) {
    fetch('/api/hello')
      .then(r => r.json())
      .then(r => {
        this.be = r.message;
      });
    return x;
  }
}
