import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public isAuthenticated = signal(false);

  public login(email: string, password: string): void {
    console.log(`login: email = ${email}, password = ${password}`)
    if (email === 'abc@test.com' && password === 'AbC12345') {
      this.isAuthenticated.set(true);
    }
  }

  public logout(): void {
    console.log(`logged out`)
    this.isAuthenticated.set(false);
  }
}
