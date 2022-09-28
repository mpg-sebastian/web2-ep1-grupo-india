import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/entities/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {

  listPosts: Post[] | undefined;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.postsSelect().subscribe(
      (res) => {
        // console.log("data: ", res);
        this.listPosts = JSON.parse(JSON.stringify(res));
        console.log("data: ", res);
      }
    )
  }

  selectPost(postSelected: Post) {
    console.log("Post selected #",postSelected.id, postSelected);
  }

}
