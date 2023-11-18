import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'feature',
    loadChildren: () =>
      import('@nx-monorepo-salvae/feature').then((m) => m.featureRoutes),
  },
];
