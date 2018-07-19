import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pw-projects-site',
  templateUrl: './projects-site.component.html',
  styleUrls: ['./projects-site.component.css']
})
export class ProjectsSiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('ProjectsSiteComponent ngOnInit');
  }

}
