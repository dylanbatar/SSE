import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { SidebarService } from "src/app/services/sidebar.service";
import { IMenuItem } from "src/app/interfaces/imenu-item";
import { MediaMatcher } from "@angular/cdk/layout";
import { HeaderComponent } from "src/app/shared/header/header.component";

@Component({
  selector: "app-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.scss"],
})
export class PanelComponent implements OnInit {
  showFiller: boolean = true;
  menuItem: IMenuItem[];
  mql: MediaQueryList;
  mediaListender: () => void;
  @ViewChild(HeaderComponent) header: HeaderComponent;

  constructor(
    private _sidebar: SidebarService,
    changeDetector: ChangeDetectorRef,
    public media: MediaMatcher
  ) {
    this.mql = this.media.matchMedia("(min-width:600px)");
    this.mediaListender = () => {
      console.log(this.mql.matches, this.mql.media);
      changeDetector.detectChanges();
    };
    this.mql.addListener(this.mediaListender);
  }
  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void {
    this.menuItem = this._sidebar.getMenu();
  }

  backdrop() {
    this.showFiller = false;
    this.header.handleSidebar();
  }

  openAndClose(event) {
    this.showFiller = event;
  }
}
