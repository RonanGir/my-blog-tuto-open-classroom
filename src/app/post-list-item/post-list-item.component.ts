import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() id: number;
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() dontLoveIts: number;
  @Input() created_at: Date;
  @Input() index: number;

  maxLength: number       = 200;
  truncate_suffix: string = "...";
  article_content: string;


  constructor(public postService: PostService) { }

  ngOnInit() {
  }

  getId(): number {
    return this.id;
  }

  getIndex(): number {
    return this.index;
  }

  getTitle(): string {
    return this.title;
  }

  getContent(): string {
    this.article_content = this.content;

    if (this.content.length > this.maxLength) {
      this.article_content = this.article_content.substring(0,this.maxLength);
      this.article_content = this.article_content.concat(this.truncate_suffix);
    }

    return this.article_content;
  }

  getLike(loveIts: number): string {
    return loveIts > 1 ? "likes" : "like";
  }

  getDislike(dontLoveIts: number): string {
    return dontLoveIts > 1 ? "dislikes" : "dislike";
  }

  onAddLoveIt(id: number): void {
    this.postService.addLoveIt(+id);
  }

  onAddDontLoveIt(id: number): void {
    this.postService.addDontLoveIt(+id);
  }

  onDeletePost(post: Post): void {
    this.postService.deletePost(post);
  }




}
