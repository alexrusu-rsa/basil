import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'b-welcome',
  imports: [RouterLink],
  templateUrl: './welcome.html',
  styleUrl: './welcome.css',
})
export class Welcome {}
