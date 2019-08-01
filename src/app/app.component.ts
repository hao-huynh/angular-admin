import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-admin';
  header = {
    logo: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png',
    menus: [
      {id: 'home', name: 'Home', url: ''},
      {id: 'users', name: 'Users', url: 'users'},
    ],
    avatar: 'https://tinyfac.es/data/avatars/BA0CB1F2-8C79-4376-B13B-DD5FB8772537-200w.jpeg',
    profileMenus: [
      {id: 'myAccount', name: 'My Account'},
      {id: 'logout', name: 'Logout'},
    ]
  };
}
