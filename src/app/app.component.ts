import {Component} from '@angular/core';

type MenuType = 'projects' | 'top-ten' | 'blogs';

interface MenuItem {
  type: MenuType;
  title: string;
}

@Component({
  selector: 'pw-root' ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Project Workspace';

  menuItems: MenuItem[] = [
    { title: 'Projects', type: 'projects'},
    { title: 'Top 10', type: 'top-ten'},
    { title: 'Technical Blog', type: 'blogs'}
  ];
  chosenSite: MenuType = 'blogs';

  handleMenuClick(site: MenuType) {
    this.chosenSite = site;
  }
}
