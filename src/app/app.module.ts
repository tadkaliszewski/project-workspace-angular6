import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsModule } from './projects/projects.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { ProjectsSiteComponent } from './projects/projects-site/projects-site.component';
import { Top10SiteComponent } from './projects/top10-site/top10-site.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Route[] = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  { path: 'projects', component: ProjectsSiteComponent },
  { path: 'top-ten', component: Top10SiteComponent },
  { path: 'blogs', loadChildren: './blog/blog.module#BlogModule' },
  // { path: '**', component: /* TODO: make a NotFoundSiteComponent */ },
];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    ProjectsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
