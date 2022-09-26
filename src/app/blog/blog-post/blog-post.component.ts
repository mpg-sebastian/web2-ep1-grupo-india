import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/entities/comment';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  listComments: Comment[] | undefined;

  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.commentsService.commentsSelect().subscribe(
      (res) => {
        this.listComments = JSON.parse(JSON.stringify(res));
      }
    )
  }

  selectComment(commentSelected: Comment) {
    console.log("Comment selected #", commentSelected.id, commentSelected);
  }

}
