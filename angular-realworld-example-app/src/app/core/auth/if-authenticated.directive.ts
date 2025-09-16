import {
  DestroyRef,
  Directive,
  inject,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";
import { UserService } from "./services/user.service";

@Directive({
  selector: "[ifAuthenticated]",
  standalone: true,
})
export class IfAuthenticatedDirective<T> implements OnInit {
  destroyRef = inject(DestroyRef);
  constructor() {}

  condition: boolean = false;
  hasView = false;

  ngOnInit() {
   
  }

  @Input() set ifAuthenticated(condition: boolean) {
    this.condition = condition;
  }
}
