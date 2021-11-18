import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserResolveService } from './services/user-resolve.service';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
          {path: 'users',
            component: UsersComponent,
            children: [
              {path: ':id', component: UserDetailsComponent,
                resolve: {data: UserResolveService}},
            ]},
          {path: 'posts',
            component: PostsComponent,
            children: [
              {path: ':id', component: PostDetailsComponent}
            ]
          },
          {path: 'comments', component: CommentsComponent},
        ])
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
