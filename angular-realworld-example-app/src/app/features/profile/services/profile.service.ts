import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { Profile } from "../models/profile.model";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class ProfileService {
  constructor(private readonly http: HttpClient) {}

  get(username: string) {

  }

  follow(username: string) {

  }

  unfollow(username: string) {

  }
}
