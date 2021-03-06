import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProjectsModule } from './projects/projects.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './highlight.directive';

const routes: Route[] = [
  { path: 'blogs', loadChildren: './blog/blog.module#BlogModule' },
  // { path: '**', component: /* TODO: make a NotFoundSiteComponent */ },
];

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    HighlightDirective
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
