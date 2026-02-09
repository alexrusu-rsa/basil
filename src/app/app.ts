import { Component, signal } from '@angular/core';
import { Welcome } from "./welcome/welcome";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Welcome],
})
export class App {
  protected readonly title = signal('basil');
}
