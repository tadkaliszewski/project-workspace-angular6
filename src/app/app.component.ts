import {Component} from '@angular/core';

import { MenuType } from './main-menu/main-menu.component';

@Component({
  selector: 'pw-root' ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Project Workspace';

  chosenSite: MenuType = 'blogs';
}
