import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() stateSidePanel: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  handleSidebar() {
    this.isOpen = !this.isOpen;
    this.stateSidePanel.emit(this.isOpen);
  }
}
