import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PanelRoutingModule } from "./panel-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { PanelComponent } from "./panel/panel.component";
import { MaterialModule } from "src/app/materials/material.module";

@NgModule({
  declarations: [PanelComponent],
  exports: [PanelComponent],
  imports: [
    CommonModule,
    PanelRoutingModule,
    SharedModule,
    MaterialModule,
  ],
})
export class PanelModule {}
