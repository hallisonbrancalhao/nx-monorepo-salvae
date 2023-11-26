import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      import('@nx-monorepo-salvae/feature-login').then(
        (m) => m.featureLoginRoutes
      ),
  },
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
