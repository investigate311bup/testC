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

  constructor() {
    this.test(1)
  }

  test(x: number) {
    return x;
  }
}
