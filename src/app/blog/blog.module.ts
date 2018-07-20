import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsSiteComponent } from './blogs-site/blogs-site.component';
import {Route, RouterModule} from '@angular/router';
import { PostItemComponent } from './post-item/post-item.component';

const routes: Route[] = [
  {path: '', component: BlogsSiteComponent,
    children: [
      {path: ':id', component: PostItemComponent}
    ]}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BlogsSiteComponent, PostItemComponent]
})
export class BlogModule { }
