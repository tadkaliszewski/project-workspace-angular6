import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsSiteComponent } from './blogs-site.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('BlogsSiteComponent', () => {
  let component: BlogsSiteComponent;
  let fixture: ComponentFixture<BlogsSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogsSiteComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
