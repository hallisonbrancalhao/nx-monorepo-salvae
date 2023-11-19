import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('@nx-monorepo-salvae/feature-home').then(
        (m) => m.FeatureHomeModule
      ),
  },
];
