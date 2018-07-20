import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectSiteComponent } from './add-project-site.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {ProjectsService} from '../projects.service';
import {RouterTestingModule} from '@angular/router/testing';
import {Project} from '../Project';
import {EMPTY as EMPTY_OBSERVABLE, Observable} from 'rxjs';

describe('AddProjectSiteComponent', () => {
  let component: AddProjectSiteComponent;
  let fixture: ComponentFixture<AddProjectSiteComponent>;

  class ProjectsServiceStub {

    addNewProject(project: Project): Observable<Project> {
      return EMPTY_OBSERVABLE;
    }

  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectSiteComponent ],
      providers: [
        { provide: ProjectsService, useClass: ProjectsServiceStub }
      ],
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service method addNewProject when handleSubmit fired', () => {

    // GIVEN
    const projectService = TestBed.get(ProjectsService);
    const addNewProjectSpy = spyOn(projectService, 'addNewProject').and.callThrough();
    component.model.title = 'Hello World';

    // WHEN
    component.handleSubmit(<NgForm>{});

    // THEN
    expect(addNewProjectSpy).toHaveBeenCalledWith(
      {
        likedBy: 0,
        title: 'Hello World',
        description: '',
        industry: '',
        imgUrl: 'https://picsum.photos/200/200?image=0'
      });
  });
});
