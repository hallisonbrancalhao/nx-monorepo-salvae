import { Route } from '@angular/router';
import { AppShellComponent } from './app-shell.component';

export const featureShellRoutes: Route[] = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('@nx-monorepo-salvae/feature-admin').then(
            (m) => m.featureAdminRoutes
          ),
      },
    ],
  },
];
