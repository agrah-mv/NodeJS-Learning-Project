import {
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  Output,
} from "@angular/core";
import { Router } from "@angular/router";
import { NgClass } from "@angular/common";
import { UserService } from "../../../core/auth/services/user.service";
import { Article } from "../models/article.model";

@Component({
  selector: "app-favorite-button",
  template: `
    <button
      class="btn btn-sm"
      [ngClass]="{
        disabled: isSubmitting,
        'btn-outline-primary': !article.favorited,
        'btn-primary': article.favorited
      }"
      (click)="toggleFavorite()"
    >
      <i class="ion-heart"></i> <ng-content></ng-content>
    </button>
  `,
  imports: [NgClass],
})
export class FavoriteButtonComponent {
  destroyRef = inject(DestroyRef);
  isSubmitting = false;

  @Input() article!: Article;
  @Output() toggle = new EventEmitter<boolean>();

  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
  ) {}

  toggleFavorite(): void {
    
  }
}
