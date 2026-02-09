import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {
  MatList,
  MatListItem,
  MatListItemIcon,
  MatListItemLine,
  MatListItemTitle,
} from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'b-watering',
  imports: [
    RouterLink,
    MatIconButton,
    MatIcon,
    MatList,
    MatListItem,
    MatListItemTitle,
    MatListItemLine,
    MatListItemIcon,
  ],
  templateUrl: './watering.html',
})
export class Watering {}
