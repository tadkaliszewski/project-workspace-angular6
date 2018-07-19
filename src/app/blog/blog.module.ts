import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsSiteComponent } from './blogs-site/blogs-site.component';
import {Route, RouterModule} from '@angular/router';

const routes: Route[] = [
  {path: '', component: BlogsSiteComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BlogsSiteComponent]
})
export class BlogModule { }
