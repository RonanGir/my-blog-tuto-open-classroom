import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit, OnDestroy {

  addPostForm: FormGroup;
  errorMessage: string;
  postsSubscription: Subscription;
  posts: Post[];

  constructor(private postService: PostService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
    this.postsSubscription = this.postService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.getPosts();
    this.postService.emitPosts();
  }

  initForm() {
    this.addPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit() {
    const id: number      = this.posts.length;
    const title: string   = this.addPostForm.get('title').value;
    const content: string = this.addPostForm.get('content').value;
    const post: Post      = new Post(id, title, content, 0, 0);

    this.postService.createPost(post);
    this.router.navigate(['/posts']);
  }


  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
