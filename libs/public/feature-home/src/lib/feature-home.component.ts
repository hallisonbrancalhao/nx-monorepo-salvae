import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiLayoutModule } from '@nx-monorepo-salvae/ui-layout';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nx-monorepo-salvae-feature-home',
  standalone: true,
  imports: [CommonModule, UiLayoutModule, RouterLink],
  templateUrl: './feature-home.component.html',
  styleUrls: ['./feature-home.component.scss'],
})
export class FeatureHomeComponent {}
