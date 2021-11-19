import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUser } from "../../interfaces/user.interface";
import {IPost} from "../../interfaces/post.interface";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: IUser
  postsUser: IPost[] = [];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
              // private userService: UserService) {

    this.activatedRoute.params.subscribe(params => {
      let id = +params['id'];

      postService.getPostsByUserId(id).subscribe(value => this.postsUser = value);
    });

    this.activatedRoute.data.subscribe(value => this.user = value['data']);

  }

  ngOnInit(): void {
  }

}
