import { Component, Input, OnInit } from '@angular/core';

import { Post } from 'src/app/models/Post';
import { User } from 'src/app/models/User';
import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: User;

  // classwork
  postsUser: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPostsByUserId(this.user.id).subscribe(value => this.postsUser = value);
  }

}
