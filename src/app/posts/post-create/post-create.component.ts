import { Component, EventEmitter, Output } from "@angular/core";
import { Post } from "../post.model";
import {NgForm} from "@angular/forms"

@Component({
  selector: 'app-post-create',   // helps us to use the component below, this is our own HTML tag
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})

export class PostCreateComponent {
  enteredTitle='';
  enteredContent='';
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm){                          //form is of type NgForm
    if(form.invalid){
      return
    }
    const post:Post = {                             // post is of type Post (ctr+click to see)
      title: form.value.title,
      content: form.value.content
    };

    this.postCreated.emit(post);
  }
}
