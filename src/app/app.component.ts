import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root' ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  /*template: '<h1>Cześć jestem H1</h1>',
  styles: [`
    h1 {
      color: #64ff8e;
    }
  `],*/
})
export class AppComponent {

  title = 'Project Workspace';
  presentTitle = true;
  helloCars = 'Hello cars2 hello !';

  printCars(): string {
    return 'Audi, Volvo, BMV';
  }

  togglePresentTitle() {
    this.presentTitle = !this.presentTitle;
  }
}
