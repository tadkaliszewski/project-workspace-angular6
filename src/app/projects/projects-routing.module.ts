import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {AddProjectSiteComponent} from './add-project-site/add-project-site.component';
import {Top10SiteComponent} from './top10-site/top10-site.component';
import {ProjectsSiteComponent} from './projects-site/projects-site.component';

const routes: Route[] = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsSiteComponent },
  { path: 'top-ten', component: Top10SiteComponent },
  { path: 'add-project', component: AddProjectSiteComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectsRoutingModule { }
