import { Component, signal } from '@angular/core';
import { form, FormField, required, email, pattern } from '@angular/forms/signals';

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

  onSubmit(event: Event) {
    event.preventDefault();
    // Perform login logic here
    const credentials = this.loginModel();
    console.log('Logging in with:', credentials);
    // e.g., await this.authService.login(credentials);
  }
}
