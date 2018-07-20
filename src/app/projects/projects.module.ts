import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsSiteComponent } from './projects-site/projects-site.component';
import { Top10SiteComponent } from './top10-site/top10-site.component';
import { ProjectsCounterComponent } from './projects-counter/projects-counter.component';
import { AddProjectSiteComponent } from './add-project-site/add-project-site.component';
import { FormsModule } from '@angular/forms';
import { ProjectFilterPipe } from './project-filter.pipe';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProjectsRoutingModule
  ],
  declarations: [
    ProjectsSiteComponent,
    Top10SiteComponent,
    ProjectsCounterComponent,
    AddProjectSiteComponent,
    ProjectFilterPipe
  ],
  exports: [
    ProjectsCounterComponent
  ]
})
export class ProjectsModule { }
