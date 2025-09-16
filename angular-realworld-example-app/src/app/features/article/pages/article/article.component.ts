import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { User } from "../../../../core/auth/user.model";
import { Article } from "../../models/article.model";
import { UserService } from "../../../../core/auth/services/user.service";
import { ArticleMetaComponent } from "../../components/article-meta.component";
import { AsyncPipe, NgClass } from "@angular/common";
import { MarkdownPipe } from "../../../../shared/pipes/markdown.pipe";
import { ListErrorsComponent } from "../../../../shared/components/list-errors.component";
import { ArticleCommentComponent } from "../../components/article-comment.component";
import { Comment } from "../../models/comment.model";
import { IfAuthenticatedDirective } from "../../../../core/auth/if-authenticated.directive";
import { Errors } from "../../../../core/models/errors.model";
import { Profile } from "../../../profile/models/profile.model";
import { FavoriteButtonComponent } from "../../components/favorite-button.component";
import { FollowButtonComponent } from "../../../profile/components/follow-button.component";

@Component({
  selector: "app-article-page",
  templateUrl: "./article.component.html",
  imports: [
    ArticleMetaComponent,
    RouterLink,
    NgClass,
    FollowButtonComponent,
    FavoriteButtonComponent,
    MarkdownPipe,
    AsyncPipe,
    ListErrorsComponent,
    FormsModule,
    ArticleCommentComponent,
    ReactiveFormsModule,
    IfAuthenticatedDirective,
  ],
})
export default class ArticleComponent implements OnInit {
  article!: Article;
  currentUser!: User | null;
  comments: Comment[] = [];
  canModify: boolean = false;

  commentControl = new FormControl<string>("", { nonNullable: true });
  commentFormErrors: Errors | null = null;

  isSubmitting = false;
  isDeleting = false;
  destroyRef = inject(DestroyRef);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly userService: UserService,
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.params["slug"];
  }

  onToggleFavorite(favorited: boolean): void {
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }

  toggleFollowing(profile: Profile): void {
    this.article.author.following = profile.following;
  }

  deleteArticle(): void {
    this.isDeleting = true;

  }

  addComment() {
    this.isSubmitting = true;
    this.commentFormErrors = null;
  }

  deleteComment(comment: Comment): void {
    console.log('comment needs to be deleted')
  }
}
