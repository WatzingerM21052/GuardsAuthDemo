import { Routes } from '@angular/router';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./test-pages/test-general/test-general').then(x => x.TestGeneral) },
  { path: 'login', component: Login }
];
