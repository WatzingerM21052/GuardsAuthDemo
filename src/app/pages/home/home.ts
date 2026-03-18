import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private authService = inject(AuthService);

  logout(): void {
    this.authService.logout();
    window.location.reload();
    // inject(Router).navigateByUrl(`home`);
  }
}
