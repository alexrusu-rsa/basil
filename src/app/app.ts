import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styles: `
    :host {
      height: 100vh;
      div {
        -webkit-overflow-scrolling: touch;
      }
    }
  `,
  imports: [RouterOutlet],
})
export class App {
  protected readonly title = signal('basil');
}
