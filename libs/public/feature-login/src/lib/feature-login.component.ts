import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'nx-monorepo-salvae-feature-login',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './feature-login.component.html',
  styleUrls: ['./feature-login.component.scss'],
})
export class FeatureLoginComponent {
  showPassword: boolean = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
