import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { QuestionsRoutingModule } from "./questions-routing.module";
import { QuestionsComponent } from "./questions.component";
import { MaterialModule } from "src/app/materials/material.module";
import { TablesModule } from "src/app/components/table/tables.module";

@NgModule({
  declarations: [QuestionsComponent],
  imports: [CommonModule, QuestionsRoutingModule, MaterialModule, TablesModule],
})
export class QuestionsModule {}
