import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsSiteComponent } from './blogs-site/blogs-site.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BlogsSiteComponent],
  exports: [BlogsSiteComponent]
})
export class BlogModule { }
