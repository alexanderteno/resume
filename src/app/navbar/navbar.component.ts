import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';

import { NavigationRoutes } from '../navigation-routes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  routes: Routes = null;

  constructor() {
    this.routes = NavigationRoutes.routes;
  }

  ngOnInit() {
  }
}
