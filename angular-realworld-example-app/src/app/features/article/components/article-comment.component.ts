import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Comment } from "../models/comment.model";

@Component({
  selector: "app-article-comment",
  template: `
    @if (comment) {
      <div class="card">
        <div class="card-block">
          <p class="card-text">
            {{ comment.body }}
          </p>
        </div>
        <div class="card-footer">
          <a
            class="comment-author"
            [routerLink]="['/profile', comment.author.username]"
          >
            <img [src]="comment.author.image" class="comment-author-img" />
          </a>
          &nbsp;
          <a
            class="comment-author"
            [routerLink]="['/profile', comment.author.username]"
          >
            {{ comment.author.username }}
          </a>
          <span class="date-posted">
            {{ comment.createdAt  }}
          </span>

        </div>
      </div>
    }
  `,
  imports: [RouterLink],
})
export class ArticleCommentComponent {
  @Input() comment!: Comment;
  @Output() delete = new EventEmitter<boolean>();
}
