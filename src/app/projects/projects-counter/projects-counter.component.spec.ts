import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsCounterComponent } from './projects-counter.component';

describe('ProjectsCounterComponent', () => {
  let component: ProjectsCounterComponent;
  let fixture: ComponentFixture<ProjectsCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
