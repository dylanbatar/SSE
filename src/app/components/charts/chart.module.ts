import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LineComponent } from "./line/line.component";
import { BarComponent } from "./bar/bar.component";
import { PieComponent } from "./pie/pie.component";

import { NgxChartsModule } from "@swimlane/ngx-charts";

@NgModule({
  declarations: [LineComponent, BarComponent, PieComponent],
  exports: [LineComponent, BarComponent, PieComponent],
  imports: [CommonModule, NgxChartsModule],
})
export class ChartModule {}
