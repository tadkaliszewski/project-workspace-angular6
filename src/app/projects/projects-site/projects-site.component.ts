import { Component, OnInit } from '@angular/core';
import {Project} from '../Project';
import {ProjectsService} from '../projects.service';

@Component({
  selector: 'pw-projects-site',
  templateUrl: './projects-site.component.html',
  styleUrls: ['./projects-site.component.css']
})
export class ProjectsSiteComponent implements OnInit {

  searchTerm = '';
  // nowDate = new Date();
  projectList: Project[] = [];
  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService
      .getAllProjects()
      .subscribe((project: Project[]) => {
        console.log('Twoje projekty', project);
        this.projectList = [...project];
      });
    console.log('ProjectsSiteComponent ngOnInit');
  }

}
