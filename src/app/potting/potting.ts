import { Component } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'b-potting',
  templateUrl: './potting.html',
  imports: [RouterLink, MatIconButton, MatIcon, MatList, MatListItem],
})
export class Potting {}
