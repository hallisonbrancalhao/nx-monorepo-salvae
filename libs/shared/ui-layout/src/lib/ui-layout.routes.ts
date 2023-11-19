import { Route } from '@angular/router';
import { HeaderComponent } from './header.component';

export const uiLayoutRoutes: Route[] = [
  { path: 'header', pathMatch: 'full', component: HeaderComponent },
];
