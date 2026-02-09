import { Routes } from '@angular/router';
import { Potting } from './potting/potting';
import { Welcome } from './welcome/welcome';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    component: Welcome,
  },
  {
    path: 'potting',
    loadComponent: () => import('./potting/potting').then((m) => m.Potting),
  },
  {
    path: 'watering',
    loadComponent: () => import('./watering/watering').then((m) => m.Watering),
  },
  {
    path: 'pruning',
    loadComponent: () => import('./pruning/pruning').then((m) => m.Pruning),
  },
  {
    path: '**',
    redirectTo: 'welcome',
  },
];
