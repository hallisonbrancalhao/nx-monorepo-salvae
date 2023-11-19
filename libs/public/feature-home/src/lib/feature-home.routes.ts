import { Route } from '@angular/router';
import { FeatureHomeComponent } from './feature-home.component';

export const featureHomeRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: FeatureHomeComponent },
];
