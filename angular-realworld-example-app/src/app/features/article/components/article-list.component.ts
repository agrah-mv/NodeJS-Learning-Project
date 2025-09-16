import { Component, DestroyRef, inject, Input } from "@angular/core";
import { ArticleListConfig } from "../models/article-list-config.model";
import { Article } from "../models/article.model";
import { ArticlePreviewComponent } from "./article-preview.component";
import { NgClass } from "@angular/common";
import { LoadingState } from "../../../core/models/loading-state.model";

@Component({
  selector: "app-article-list",
  template: `
    @if (loading === LoadingState.LOADING) {
      <div class="article-preview">Loading articles...</div>
    }

    <!-- @if (true) { -->
      @for (article of results; track article.slug) {
        <app-article-preview [article]="article" />
      } @empty {
        <div class="article-preview">No articles are here... yet.</div>
      }

      <nav>
        <ul class="pagination">
          @for (pageNumber of totalPages; track pageNumber) {
            <li
              class="page-item"
              [ngClass]="{ active: pageNumber === currentPage }"
            >
              <button class="page-link" (click)="setPageTo(pageNumber)">
                {{ pageNumber }}
              </button>
            </li>
          }
        </ul>
      </nav>
    <!-- } -->
  `,
  imports: [ArticlePreviewComponent, NgClass],
  styles: `
    .page-link {
      cursor: pointer;
    }
  `,
})
export class ArticleListComponent {
  query!: ArticleListConfig;
  results: Article[] = [];
  currentPage = 1;
  totalPages: Array<number> = [];
  loading = LoadingState.NOT_LOADED;
  LoadingState = LoadingState;
  destroyRef = inject(DestroyRef);
  
  // HARD CODED DATA
  public data = {
    "articles": [
        {
            "slug": "how-to-learn-javascript-efficiently",
            "title": "How to Learn JavaScript Efficiently",
            "description": "A comprehensive guide to mastering JavaScript from beginner to advanced level",
            "body": "Learning JavaScript can be overwhelming with so many resources available. Here's a structured approach that has helped thousands of developers master this essential language.\n\n## Start with the Fundamentals\n\nBefore diving into frameworks, master the core concepts: variables, functions, objects, and arrays. Understanding these building blocks is crucial for writing clean, maintainable code.\n\n## Practice with Real Projects\n\nThe best way to learn is by building actual applications. Start with simple projects like a todo list or calculator, then gradually increase complexity.\n\n## Join the Community\n\nEngage with other developers through forums, Discord servers, and local meetups. The JavaScript community is incredibly welcoming and helpful.",
            "tagList": [
                "beginners",
                "javascript",
                "programming",
                "webdev"
            ],
            "createdAt": "2025-08-18T14:36:29.692Z",
            "updatedAt": "2025-08-18T14:36:29.692Z",
            "favorited": false,
            "favoritesCount": 2,
            "author": {
                "username": "johndoe",
                "bio": "Full-stack developer passionate about clean code and innovative solutions. Love working with modern web technologies.",
                "image": "https://raw.githubusercontent.com/gothinkster/node-express-realworld-example-app/refs/heads/master/src/assets/images/smiley-cyrus.jpeg",
                "following": false
            }
        },
        {
            "slug": "react-hooks-best-practices",
            "title": "React Hooks: Best Practices and Common Pitfalls",
            "description": "Essential patterns and anti-patterns when working with React Hooks",
            "body": "React Hooks have revolutionized how we write React components, but they come with their own set of best practices and potential pitfalls.\n\n## useEffect Dependencies\n\nOne of the most common mistakes is forgetting to include dependencies in the useEffect array. This can lead to stale closures and unexpected behavior.\n\n## Custom Hooks for Reusability\n\nCreate custom hooks to encapsulate stateful logic that can be shared across components. This promotes code reuse and maintainability.\n\n## Performance Considerations\n\nUse useMemo and useCallback judiciously. Don't optimize prematurely, but be aware of when these hooks can help prevent unnecessary re-renders.",
            "tagList": [
                "frontend",
                "hooks",
                "javascript",
                "react"
            ],
            "createdAt": "2025-08-18T14:36:29.692Z",
            "updatedAt": "2025-08-18T14:36:29.692Z",
            "favorited": false,
            "favoritesCount": 2,
            "author": {
                "username": "janesmith",
                "bio": "Frontend developer with a keen eye for UI/UX design. Specializing in React and modern CSS frameworks.",
                "image": "https://raw.githubusercontent.com/gothinkster/node-express-realworld-example-app/refs/heads/master/src/assets/images/smiley-cyrus.jpeg",
                "following": false
            }
        },
        {
            "slug": "building-scalable-apis-with-node-js",
            "title": "Building Scalable APIs with Node.js",
            "description": "Architectural patterns and best practices for creating robust backend services",
            "body": "Building scalable APIs requires careful consideration of architecture, error handling, and performance optimization.\n\n## API Design Principles\n\nFollow RESTful conventions and use appropriate HTTP status codes. Design your API to be intuitive and self-documenting.\n\n## Error Handling Strategy\n\nImplement comprehensive error handling with proper logging and monitoring. Use middleware to handle errors consistently across your application.\n\n## Database Optimization\n\nOptimize database queries and consider implementing caching strategies for frequently accessed data. Connection pooling is essential for production applications.",
            "tagList": [
                "api",
                "architecture",
                "backend",
                "nodejs"
            ],
            "createdAt": "2025-08-18T14:36:29.692Z",
            "updatedAt": "2025-08-18T14:36:29.692Z",
            "favorited": false,
            "favoritesCount": 1,
            "author": {
                "username": "mikewilson",
                "bio": "Backend engineer focused on scalable architecture and DevOps. Enthusiast of cloud technologies and automation.",
                "image": "https://raw.githubusercontent.com/gothinkster/node-express-realworld-example-app/refs/heads/master/src/assets/images/smiley-cyrus.jpeg",
                "following": false
            }
        },
        {
            "slug": "introduction-to-machine-learning-for-developers",
            "title": "Introduction to Machine Learning for Developers",
            "description": "Getting started with ML concepts and practical applications for software developers",
            "body": "Machine learning might seem intimidating, but it's more accessible than ever for developers looking to expand their skillset.\n\n## Understanding the Basics\n\nStart with supervised learning concepts like classification and regression. These form the foundation for more complex ML algorithms.\n\n## Practical Tools and Libraries\n\nPython's scikit-learn is perfect for beginners, while TensorFlow and PyTorch offer more advanced capabilities for deep learning projects.\n\n## Data Preprocessing\n\nMost of ML work involves cleaning and preparing data. Learn to handle missing values, normalize features, and split datasets properly.",
            "tagList": [
                "ai",
                "datascience",
                "machinelearning",
                "python"
            ],
            "createdAt": "2025-08-18T14:36:29.692Z",
            "updatedAt": "2025-08-18T14:36:29.692Z",
            "favorited": false,
            "favoritesCount": 1,
            "author": {
                "username": "sarahchen",
                "bio": "Data scientist and machine learning engineer. Passionate about turning data into actionable insights.",
                "image": "https://raw.githubusercontent.com/gothinkster/node-express-realworld-example-app/refs/heads/master/src/assets/images/smiley-cyrus.jpeg",
                "following": false
            }
        }
    ],
    "articlesCount": 4
};

  @Input() limit!: number;
  @Input()
  set config(config: ArticleListConfig) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  constructor() {}

  setPageTo(pageNumber: number) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
         this.results = this.data.articles;
  }
}
