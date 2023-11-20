import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@nx-monorepo-salvae/feature-shell').then(
        (m) => m.FeatureShellModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('@nx-monorepo-salvae/feature-home').then(
        (m) => m.FeatureHomeModule
      ),
  },
];
