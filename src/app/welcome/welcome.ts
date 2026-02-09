import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'b-welcome',
  imports: [RouterLink, UpperCasePipe, MatButton, MatIcon],
  templateUrl: './welcome.html',
})
export class Welcome {}
