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
  isLogged = false;
  user$ = { name: 'John Doe', avatar: null };

  logout() {
    console.log('logout');
    this.isLogged = false;
  }

  login() {
    console.log('login');
    this.isLogged = true;
  }
}
