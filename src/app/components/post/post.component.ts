import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IPost } from "../../interfaces/post.interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPost;

  constructor(private router: Router) {
              // private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  navTo() {
    // this.router.navigate([this.post.id],
    //   {relativeTo: this.activatedRoute, state: this.post});
    // this.router.navigate([this.post.id],
    //   {relativeTo: this.activatedRoute});

    this.router.navigate([`posts/${this.post.id}`]);
  }
}
