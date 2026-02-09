import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'b-pruning',
  imports: [RouterLink, MatList, MatIcon, MatIconButton, MatListItem],
  templateUrl: './pruning.html',
})
export class Pruning {}
