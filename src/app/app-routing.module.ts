import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationRoutes } from './navigation-routes';

const applicationRoutes = NavigationRoutes.routes.map((route) => {
  return route.route;
});

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes.concat(applicationRoutes))],
  exports: [RouterModule]
})
export class AppRoutingModule { }
