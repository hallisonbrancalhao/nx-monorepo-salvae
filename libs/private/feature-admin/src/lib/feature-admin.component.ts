import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'nx-monorepo-salvae-feature-admin',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatSlideToggleModule],
  templateUrl: './feature-admin.component.html',
  styleUrls: ['./feature-admin.component.scss'],
})
export class FeatureAdminComponent {}
