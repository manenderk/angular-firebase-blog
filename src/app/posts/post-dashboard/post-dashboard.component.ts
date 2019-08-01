import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { AuthService } from '../../core/auth.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-dashboard',
  templateUrl: './post-dashboard.component.html',
  styleUrls: ['./post-dashboard.component.css']
})
export class PostDashboardComponent implements OnInit {

  /* title: string;
  image: string = null;
  content: string; */

  post: Post;

  constructor(private auth: AuthService, private postService: PostService) { }

  ngOnInit() {
  }

  createPost(){
    this.post.author = this.auth.authState.displayName || this.auth.authState.email;
    this.post.authorId = this.auth.authState.currentUserId;  
  }

}
