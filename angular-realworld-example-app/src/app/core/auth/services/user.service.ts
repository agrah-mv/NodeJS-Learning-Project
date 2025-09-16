import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { User } from "../user.model";
import { JwtService } from "./jwt.service";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(
    private readonly http: HttpClient,
    private readonly jwtService: JwtService
  ) { }

  private formatErrors(err: any) {
    // If backend returns { errors: [ ... ] }
    if (Array.isArray(err?.errors)) {
      const formatted: { [key: string]: string[] } = {};
      err.errors.forEach((e: any) => {
        if (!formatted[e.path]) {
          formatted[e.path] = [];
        }
        formatted[e.path].push(e.msg);
      });
      return { errors: formatted };
    }
    // fallback
    return { errors: { "Server error": ["Unknown error"] } };
  }

  login(credentials: { email: string; password: string }): Observable<User> {
    return this.http.post<{ msg: string; token: string; user: User }>("http://localhost:5000/api/users/login", credentials).pipe(
      tap(response => {
        if (response.token) {
          this.jwtService.saveToken(response.token);
        }
      }),
      map(response => response.user),
      catchError(err => throwError(() => this.formatErrors(err.error)))
    );
  }

  register(credentials: { username: string; email: string; password: string }): Observable<User> {
    return this.http.post<{ user: User }>("http://localhost:5000/api/users/register", credentials).pipe(
      tap(response => console.log('response.user:', response.user)),
      map(response => response.user),
      catchError(err => {
        console.error('Auth error:', err);
        return throwError(() => this.formatErrors(err.error));
      })
    );
  }

  getCurrentUser() {

  }

}
