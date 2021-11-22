import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPost } from 'src/app/interfaces/post.interface';
import { PostService } from "../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  post: IPost;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {

    this.activatedRoute.params.subscribe(value => {

      let id = +value['id'];

      this.postService.getPost(id).subscribe(value => this.post = value);
    })

  }

}
