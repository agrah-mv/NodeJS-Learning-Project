import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Article } from "../models/article.model";

@Injectable({ providedIn: "root" })
export class ArticlesService {
  constructor(private readonly http: HttpClient) {}

  query() {
    // Convert any filters over to Angular's URLSearchParams
  }

  get(slug: string) {

  }

  delete(slug: string) {

  }

  create(article: Partial<Article>) {

  }

  update(article: Partial<Article>) {

  }

  favorite(slug: string) {

  }

  unfavorite(slug: string) {

  }
}
