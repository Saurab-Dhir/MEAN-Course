import { Component } from "@angular/core";
import { Post } from "../post.model";
import {NgForm} from "@angular/forms"
import { PostService } from "../posts.service";

@Component({
  selector: 'app-post-create',   // helps us to use the component below, this is our own HTML tag
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  enteredTitle='';
  enteredContent='';

  constructor(public postServices: PostService){}

  onAddPost(form: NgForm){                          //form is of type NgForm
    if(form.invalid){
      return
    }
    const post:Post = {                             // post is of type Post (ctr+click to see)
      title: form.value.title,
      content: form.value.content
    };

    this.postServices .addPost(form.value.title, form.value.content);
  }
}
