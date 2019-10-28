import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: any[];

  constructor(public postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.posts;
  }

}
