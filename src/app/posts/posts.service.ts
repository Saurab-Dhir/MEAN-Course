import { Injectable } from "@angular/core";
import { Subject } from 'rxjs'  // read on rxjs
import { Post } from "./post.model";

@Injectable({providedIn:'root'})

export class PostService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();  // ??

  getPosts(){
    return [...this.posts];   // To pass the object not by reference, creates a new array with the prev objects
  }

  getPostUpdateListener(){
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
     const post: Post = {title: title, content: content}
     this.posts.push(post);
     this.postsUpdated.next([...this.posts]);
  }
}
