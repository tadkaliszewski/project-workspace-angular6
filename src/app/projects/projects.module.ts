import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsSiteComponent } from './projects-site/projects-site.component';
import { Top10SiteComponent } from './top10-site/top10-site.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProjectsSiteComponent,
    Top10SiteComponent
  ],
  exports: [
    ProjectsSiteComponent,
    Top10SiteComponent
  ]
})
export class ProjectsModule { }
