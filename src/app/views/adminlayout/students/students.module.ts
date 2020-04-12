import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StudentsRoutingModule } from "./students-routing.module";
import { StudentsComponent } from "./students.component";
import { TablesModule } from "src/app/components/table/tables.module";

@NgModule({
  declarations: [StudentsComponent],
  imports: [CommonModule, StudentsRoutingModule, TablesModule],
  exports: [StudentsComponent],
})
export class StudentsModule {}
