import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'b-watering',
  imports: [RouterLink, MatIconButton, MatIcon, MatList, MatListItem],
  templateUrl: './watering.html',
})
export class Watering {}
