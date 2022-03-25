import { OnInit } from "@angular/core";
import { PostService } from "./app.module";


export class PostComponent implements OnInit {
    posts: Posts[] = [];
    constructor(
      private postService: PostService
    ) {}
    ngOnInit(): void {
      this.postService.getAllPosts()
      .subscribe(data => {
        this.posts = data;
      });
    }
  }
