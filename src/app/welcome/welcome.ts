import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'b-welcome',
  imports: [RouterLink, UpperCasePipe, MatButton],
  templateUrl: './welcome.html',
})
export class Welcome {}
