import { Component, OnInit } from '@angular/core';
import {Project} from '../Project';
import {ProjectsService} from '../projects.service';

@Component({
  selector: 'pw-projects-site',
  templateUrl: './projects-site.component.html',
  styleUrls: ['./projects-site.component.css']
})
export class ProjectsSiteComponent implements OnInit {

  projectList: Project[] = [];
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectList = this.projectsService.getAllProjects();
    console.log('ProjectsSiteComponent ngOnInit');
  }

}
