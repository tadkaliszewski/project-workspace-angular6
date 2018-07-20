import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectSiteComponent } from './add-project-site.component';

describe('AddProjectSiteComponent', () => {
  let component: AddProjectSiteComponent;
  let fixture: ComponentFixture<AddProjectSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectSiteComponent ]
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
});
