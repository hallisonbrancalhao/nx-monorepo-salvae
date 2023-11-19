import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureHomeRoutes } from './feature-home.routes';
import { uiLayoutRoutes } from '@nx-monorepo-salvae/ui-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featureHomeRoutes),
    RouterModule.forChild(uiLayoutRoutes),
  ],
})
export class FeatureHomeModule {}
