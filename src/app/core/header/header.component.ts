import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() menus = [];
  @Input() avatar = '';
  @Input() logo = '';
  @Input() profileMenus = [];
  navbarOpen = false;
  dropdownOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}
