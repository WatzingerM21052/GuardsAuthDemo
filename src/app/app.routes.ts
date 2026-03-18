import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { authGuard } from './core/auth-guard';
import { Admin } from './pages/admin/admin';

export const routes: Routes = [
  { path: ``, redirectTo: `home`, pathMatch: `full` },
  { path: `home`, component: Home, canActivate: [authGuard] },
  { path: `admin`, component: Admin, canActivate: [authGuard] },
  { path: '', loadComponent: () => import('./test-pages/test-general/test-general').then(x => x.TestGeneral) },
  { path: 'login', component: Login },
  { path: `**`, redirectTo: `home` }
];
