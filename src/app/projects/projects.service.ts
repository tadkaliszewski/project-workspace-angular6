import { Injectable } from '@angular/core';
import { Project } from './Project';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, of as observableOf, ReplaySubject} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectSubject = new ReplaySubject<Project[]>(1);
  private projectCountSubject = new BehaviorSubject<number>(0);

  projectStream = this.projectSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  getProjectViaRest() {
    this.httpClient
      .get<Project[]>('http://localhost:3000/projects')
      .subscribe((projects: Project[]) => {
          this.projectSubject.next(projects);
          this.projectCountSubject.next(projects.length);
      });
  }

  getAllProjects(): Observable<Project[]> {
    this.getProjectViaRest();
    return this.projectStream;
  }

  getAllProjectCount(): Observable<number> {
    this.getProjectViaRest();
    return this.projectCountSubject.asObservable();
  }

  addNewProject(project: Project): Observable<Project> {
    return this.httpClient
      .post<Project>('http://localhost:3000/projects', project)
      .pipe(
        switchMap((value: Project) => {
          this.getProjectViaRest();
          return observableOf(value);
        })
      );
  }
}
