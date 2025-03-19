import { Routes } from '@angular/router';

import DemoComponent from './demo/demo.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'Home - nothing to do here :-)',
    component: HomeComponent,
  },
  {
    path: 'demo',
    title: 'Defer & Incremental Hydration',
    component: DemoComponent,
  },
];
