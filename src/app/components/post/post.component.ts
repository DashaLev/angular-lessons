import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IPost } from "../../interfaces/post.interface";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  @Input()
  post: IPost;

  constructor(private router: Router) {
  }

  navTo() {
    this.router.navigate([`posts/${this.post.id}`]);
  }
}
