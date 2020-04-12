import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { ChartModule } from "src/app/components/charts/chart.module";
import { MaterialModule } from "src/app/materials/material.module";

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, ChartModule, MaterialModule],
})
export class DashboardModule {}
