import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Top10SiteComponent } from './top10-site.component';

describe('Top10SiteComponent', () => {
  let component: Top10SiteComponent;
  let fixture: ComponentFixture<Top10SiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Top10SiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Top10SiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
