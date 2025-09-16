import { Component, DestroyRef, inject, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from "@angular/router";
import { UserService } from "../../../../core/auth/services/user.service";
import { Profile } from "../../models/profile.model";
import { ProfileService } from "../../services/profile.service";
import { FollowButtonComponent } from "../../components/follow-button.component";

@Component({
  selector: "app-profile-page",
  templateUrl: "./profile.component.html",
  imports: [
    FollowButtonComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FollowButtonComponent,
  ],
})
export class ProfileComponent implements OnInit {
  profile!: Profile;
  isUser: boolean = false;
  destroyRef = inject(DestroyRef);

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly userService: UserService,
    private readonly profileService: ProfileService,
  ) {}

  ngOnInit() {

  }

  onToggleFollowing(profile: Profile) {

  }
}
