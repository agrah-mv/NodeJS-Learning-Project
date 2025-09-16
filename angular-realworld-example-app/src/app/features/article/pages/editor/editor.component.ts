import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  UntypedFormGroup,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Errors } from "../../../../core/models/errors.model";
import { UserService } from "../../../../core/auth/services/user.service";
import { ListErrorsComponent } from "../../../../shared/components/list-errors.component";

interface ArticleForm {
  title: FormControl<string>;
  description: FormControl<string>;
  body: FormControl<string>;
}

@Component({
  selector: "app-editor-page",
  templateUrl: "./editor.component.html",
  imports: [ListErrorsComponent, ReactiveFormsModule],
})
export default class EditorComponent implements OnInit {
  tagList: string[] = [];
  articleForm: UntypedFormGroup = new FormGroup<ArticleForm>({
    title: new FormControl("", { nonNullable: true }),
    description: new FormControl("", { nonNullable: true }),
    body: new FormControl("", { nonNullable: true }),
  });
  tagField = new FormControl<string>("", { nonNullable: true });

  errors: Errors | null = null;
  isSubmitting = false;
  destroyRef = inject(DestroyRef);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly userService: UserService,
  ) {}

  ngOnInit() {
  }

  addTag() {
    // retrieve tag control
  }

  removeTag(tagName: string): void {
    // remove tag

  }

  submitForm(): void {
    // submit tag form
  }
}
