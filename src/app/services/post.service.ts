import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: any[];
  postsSubject = new Subject<Post[]>();


  constructor() {
    this.getPosts();
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  addLoveIt(id: number): void {
    for (let post of this.posts) {
      if (post.id == id) post.loveIts = post.loveIts + 1;
    }
    this.savePosts();
    this.emitPosts();
  }

  addDontLoveIt(id: number): void {
    for (let post of this.posts) {
      if (post.id == id) post.dontLoveIts = post.dontLoveIts + 1;
    }
    this.savePosts();
    this.emitPosts();
  }

  getPosts() {
    firebase.database().ref('/posts')
      .on('value', (data: DataSnapshot) => {
          this.posts = data.val() ? data.val() : [];
          this.emitPosts();
        }
      );
  }


  createPost(post: Post): void {
    this.posts.push(post);
    this.savePosts();
    this.emitPosts();
  }

   savePosts(): void {
    firebase.database().ref('/posts').set(this.posts);
  }


  updatePost(id: number) {

  }


  deletePost(post: Post): void {

    const postIndex = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    );

    this.posts.splice(postIndex, 1);
    this.savePosts();
    this.emitPosts();

  }



}
