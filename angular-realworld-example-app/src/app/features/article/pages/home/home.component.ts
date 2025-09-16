import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ArticleListConfig } from "../../models/article-list-config.model";
import { NgClass } from "@angular/common";
import { ArticleListComponent } from "../../components/article-list.component";
import { tap } from "rxjs/operators";
import { UserService } from "../../../../core/auth/services/user.service";
import { RxLet } from "@rx-angular/template/let";
import { IfAuthenticatedDirective } from "../../../../core/auth/if-authenticated.directive";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { of } from 'rxjs';

@Component({
  selector: "app-home-page",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  imports: [NgClass, ArticleListComponent, RxLet, IfAuthenticatedDirective],
})




export default class HomeComponent implements OnInit {
  isAuthenticated = false;
  tagsLoaded = false;

  // Hard coded data
  tags = {
    "tags": [
        "ai",
        "api",
        "architecture",
        "backend",
        "beginners",
        "datascience",
        "frontend",
        "hooks",
        "javascript",
        "machinelearning",
        "nodejs",
        "programming",
        "python",
        "react",
        "webdev"
    ]
};
  listConfig: ArticleListConfig = {
    type: "all",
    filters: {},
  };

tagsCopy = JSON.parse(JSON.stringify(this.tags.tags))
tags$ = of([...this.tagsCopy]).pipe(
  tap(() => (this.tagsLoaded = true))
);

destroyRef = inject(DestroyRef);

  constructor(
    private readonly router: Router,
    private readonly userService: UserService,
  ) {}

  ngOnInit(): void {
    
  }

  setListTo(type: string = "", filters: Object = {}): void {
    // If feed is requested but user is not authenticated, redirect to login
    if (type === "feed" && !this.isAuthenticated) {
      void this.router.navigate(["/login"]);
      return;
    }

    // Otherwise, set the list object
    this.listConfig = { type: type, filters: filters };
  }
}
