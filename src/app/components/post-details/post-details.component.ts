import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/interfaces/post.interface';
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: IPost;

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
              // private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      // this.post = history.state
      // or
      // this.post = this.router.getCurrentNavigation()?.extras.state as IPost;

      let id = +value['id'];

      this.postService.getPost(id).subscribe(value => this.post = value);
    })

  }

  ngOnInit(): void {
  }

}
