import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'nx-monorepo-salvae-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLogged = true;
  user$ = { name: 'Lanchão do João', avatar: null };
  isMobileMenuOpen = true;

  logout() {
    console.log('logout');
    this.isLogged = false;
  }

  login() {
    console.log('login');
    this.isLogged = true;
  }

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
