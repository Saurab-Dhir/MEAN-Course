import { Post } from "./post.model";

export class PostService {
  private posts: Post[] = [];

  getPosts(){

    return [...this.posts];   // To pass the object not by reference, creates a new array with the prev objects
  }
}
