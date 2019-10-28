import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
import { Router } from '@angular/router';



@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(public postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.getPosts();
    this.postService.emitPosts();
  }

  onDeletePost(post: Post) {
    this.postService.deletePost(post);
  }

  onViewPost(id: number) {
    this.router.navigate(['/posts', 'view', id]);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
