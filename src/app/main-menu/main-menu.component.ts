import {Component} from '@angular/core';

export type MenuType = 'projects' | 'top-ten' | 'blogs';

interface MenuItem {
  type: MenuType;
  title: string;
}

@Component({
  selector: 'pw-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {

  // @ViewChild('navabar') navbar: ElementRef;
  menuItems: MenuItem[] = [
    { title: 'Projects', type: 'projects'},
    { title: 'Top 10', type: 'top-ten'},
    { title: 'Technical Blog', type: 'blogs'}
  ];
  showMenu = false;

  constructor() {}

}
