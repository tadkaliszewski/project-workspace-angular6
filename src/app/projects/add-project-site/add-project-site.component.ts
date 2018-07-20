import { Component, OnInit } from '@angular/core';
import {Project} from '../Project';
import {NgForm} from '@angular/forms';
import {ProjectsService} from '../projects.service';

@Component({
  selector: 'pw-add-project-site',
  templateUrl: './add-project-site.component.html',
  styleUrls: ['./add-project-site.component.css']
})
export class AddProjectSiteComponent implements OnInit {

  model = <Project>{
    likedBy: 0,
    title: '',
    description: '',
    industry: '',
    imgUrl: '0'
  };

  httpError = '';

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {}

  handleSubmit(form: NgForm) {
    this.httpError = '';
    const sendModel = Object.assign(
      {},
      this.model,
      {imgUrl: `https://picsum.photos/200/200?image=${this.model.imgUrl}`}
    );
    this.projectsService
      .addNewProject(sendModel)
      .subscribe((project: Project) => {
        form.resetForm();
        this.model.imgUrl = '0';
        this.model.industry = '';
        console.log(project);
      },
      (err: any) => {
          this.httpError = 'Connection lost... please try again';
          console.error(err);
      });
  }
}
