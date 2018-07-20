import {Component, HostBinding, HostListener, OnInit} from '@angular/core';
import {ProjectsService} from '../projects.service';

@Component({
  selector: 'pw-projects-counter',
  template: '<span *ngIf="projectCount">Currently we got {{projectCount}} projects !</span>',
})
export class ProjectsCounterComponent implements OnInit {

  @HostBinding('style.color') color;

  projectCount = 0;
  // projectCountStream = this.projectService.getAllProjectCount();

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projectService
      .getAllProjectCount()
      .subscribe((noOfProj: number) => {
          this.projectCount = noOfProj;
      });
  }

  @HostListener('mouseover')
  mouseOver() {
    this.color = '#FF0000';
    console.log('Hello mouseover');
  }

}
