import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class CommentsService {
  constructor(private readonly http: HttpClient) {}

  getAll(slug: string) {

    return {
    "comments": [
        {
            "id": "1",
            "createdAt": "2025-08-18T18:02:33.987Z",
            "updatedAt": "2025-08-18T18:02:33.987Z",
            "body": "Great article! I've been struggling with JavaScript concepts and this really helps clarify things.",
            "author": {
                "username": "janesmith",
                "bio": "Frontend developer with a keen eye for UI/UX design. Specializing in React and modern CSS frameworks.",
                "image": "https://raw.githubusercontent.com/gothinkster/node-express-realworld-example-app/refs/heads/master/src/assets/images/smiley-cyrus.jpeg",
                "following": false
            }
        },
        {
            "id": "2",
            "createdAt": "2025-08-18T18:02:33.987Z",
            "updatedAt": "2025-08-18T18:02:33.987Z",
            "body": "The project-based approach really works. I built three projects following this guide and learned so much!",
            "author": {
                "username": "mikewilson",
                "bio": "Backend engineer focused on scalable architecture and DevOps. Enthusiast of cloud technologies and automation.",
                "image": "https://raw.githubusercontent.com/gothinkster/node-express-realworld-example-app/refs/heads/master/src/assets/images/smiley-cyrus.jpeg",
                "following": false
            }
        }
    ]
}
  }

  add(slug: string, payload: string) {

  }

  delete(commentId: string, slug: string) {

  }
}
