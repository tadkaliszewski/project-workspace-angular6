import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';

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
export class MainMenuComponent implements OnInit, AfterViewInit {

  // @ViewChild('navabar') navbar: ElementRef;
  @Output() menuChange = new EventEmitter<MenuType>();
  menuItems: MenuItem[] = [
    { title: 'Projects', type: 'projects'},
    { title: 'Top 10', type: 'top-ten'},
    { title: 'Technical Blog', type: 'blogs'}
  ];
  showMenu = false;

  constructor() {}

  ngOnInit() {}

  handleMenuClick(site: MenuType) {
    this.menuChange.emit(site);
  }

  ngAfterViewInit(): void {}

  /*
  showMenu(navbar: any) {
    // console.log(navbar.classList);
    navbar.classList.toggle('show');
  }
  */

}
