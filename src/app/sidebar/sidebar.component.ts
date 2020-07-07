import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Kryefaqja',  icon: 'pe-7s-graph', class: '' },
    { path: '/maps', title: 'Harta/Banesat',  icon:'pe-7s-map-marker', class: '' },
    { path: '/user', title: 'Profili i perdoruesit',  icon:'pe-7s-user', class: '' },
    { path: '/upgrade', title: 'Shto nje prone',  icon:'pe-7s-user', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }


  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    console.log(this.menuItems[2].path)
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
