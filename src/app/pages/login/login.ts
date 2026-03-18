import { Component, effect, inject, input, signal } from '@angular/core';
import { form, FormField, required, email, pattern } from '@angular/forms/signals';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  private authService = inject(AuthService);
  private router = inject(Router);

  loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Enter a valid email address' });
    required(schemaPath.password, { message: 'Password is required' });
    pattern(
      schemaPath.password,
      /^(?=.*[A-Z])(?=.*\d).{8,}$/,
      { message: 'Password must be at least 8 characters long and contain at least one uppercase letter and one number' }
    );
  });

  _ = effect(() => {
    if (this.authService.isAuthenticated()) {
      this.router.navigateByUrl(this.returnUrl());
    }
  })

  returnUrl = input(``);

  onSubmit(event: Event) {
    event.preventDefault();
    // Perform login logic here
    const credentials = this.loginModel();
    console.log('Logging in with:', credentials);
    // e.g., await this.authService.login(credentials);
    this.authService.login(credentials.email, credentials.password);
  }
}
