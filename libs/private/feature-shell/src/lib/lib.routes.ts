import { Route } from '@angular/router';
import { AppShellComponent } from './app-shell.component';

export const featureShellRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: AppShellComponent },
];
