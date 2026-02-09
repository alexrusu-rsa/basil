import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import {
  MatList,
  MatListItem,
  MatListItemIcon,
  MatListItemLine,
  MatListItemTitle,
} from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'b-pruning',
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
  templateUrl: './pruning.html',
})
export class Pruning {}
