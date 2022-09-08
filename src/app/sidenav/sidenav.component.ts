import { Component, OnInit } from '@angular/core';
import { navBarData } from './nav-data';
import { faXmark, faHouse } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  collspsed = true;
  navData = navBarData;
  faXmark = faXmark;
  faHouse = faHouse;

}
