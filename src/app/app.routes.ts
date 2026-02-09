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
    title: 'Basil',
  },
  {
    path: 'potting',
    loadComponent: () => import('./potting/potting').then((m) => m.Potting),
    title: 'Potting',
  },
  {
    path: 'watering',
    loadComponent: () => import('./watering/watering').then((m) => m.Watering),
    title: 'Watering',
  },
  {
    path: 'pruning',
    loadComponent: () => import('./pruning/pruning').then((m) => m.Pruning),
    title: 'Pruning',
  },
  {
    path: '**',
    redirectTo: 'welcome',
  },
];
