import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { ActivatedRoute } from "@angular/router";
import { IStudent } from "src/app/interfaces/istudent";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  user: any[] =[];
  constructor(
    private _api: ApiService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    this.activatedRouter.params.subscribe((param) => {
      this._api.getInfoUser(param.id).subscribe((response) => this.user = response);
    });
  }
}
