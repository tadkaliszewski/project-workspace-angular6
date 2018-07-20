import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'pw-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  postId = '';

  constructor(private activatedRoute: ActivatedRoute) {

    this.activatedRoute
      .params
      .subscribe((value: Params) => {
          this.postId = value.id;
      });
    /*this.activatedRoute
      .queryParams
      .subscribe((value: Params) => {
        console.log(value);
      });*/
  }

  ngOnInit() {
  }

}
