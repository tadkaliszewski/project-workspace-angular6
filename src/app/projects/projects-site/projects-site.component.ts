import {Component, OnDestroy, OnInit} from '@angular/core';
import {Project} from '../Project';
import {ProjectsService} from '../projects.service';
import {Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'pw-projects-site',
  templateUrl: './projects-site.component.html',
  styleUrls: ['./projects-site.component.css']
})
export class ProjectsSiteComponent implements OnInit, OnDestroy {

  searchTerm = '';
  // nowDate = new Date();
  projectList: Project[] = [];

  unsubStream = new Subject<void>();

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsService
      .getAllProjects()
      .pipe(
        tap((project: Project[]) => console.log('Twoje projekty', project)),
        takeUntil(this.unsubStream)
      )
      .subscribe((project: Project[]) => {
        this.projectList = [...project];
      });

    console.log('ProjectsSiteComponent ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('ProjectsSiteComponent ngOnDestroy');
    this.unsubStream.next();
    this.unsubStream.complete();
  }

}
