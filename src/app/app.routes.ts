import { Routes } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () =>
      import('./layouts/admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    redirectTo: '/admin',
  },
];
