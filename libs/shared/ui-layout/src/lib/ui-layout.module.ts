import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { uiLayoutRoutes } from './ui-layout.routes';
import { HeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(uiLayoutRoutes),
    HeaderComponent,
  ],
  exports: [HeaderComponent],
})
export class UiLayoutModule {}
