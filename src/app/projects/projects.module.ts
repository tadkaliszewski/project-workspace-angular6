import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsSiteComponent } from './projects-site/projects-site.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProjectsSiteComponent
  ],
  exports: [
    ProjectsSiteComponent
  ]
})
export class ProjectsModule { }
