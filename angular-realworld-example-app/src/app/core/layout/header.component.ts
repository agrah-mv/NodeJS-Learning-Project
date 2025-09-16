import { Component, inject } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { IfAuthenticatedDirective } from "../auth/if-authenticated.directive";

@Component({
  selector: "app-layout-header",
  templateUrl: "./header.component.html",
  imports: [RouterLinkActive, RouterLink, IfAuthenticatedDirective],
})
export class HeaderComponent {

}
