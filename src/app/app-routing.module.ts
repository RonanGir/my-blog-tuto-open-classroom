import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from '../post-list/post-list.component';
import { NewPostComponent } from '../new-post/new-post.component';


const routes: Routes = [
  { path: 'post', component: PostListComponent },
  { path: 'post/new', component: NewPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
