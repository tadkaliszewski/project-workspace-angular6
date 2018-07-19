import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsSiteComponent } from './projects-site/projects-site.component';
import { Top10SiteComponent } from './top10-site/top10-site.component';
import { ProjectsCounterComponent } from './projects-counter/projects-counter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProjectsSiteComponent,
    Top10SiteComponent,
    ProjectsCounterComponent
  ],
  exports: [
    ProjectsSiteComponent,
    Top10SiteComponent,
    ProjectsCounterComponent
  ]
})
export class ProjectsModule { }
