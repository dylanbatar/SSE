import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { StudentsRoutingModule } from "./students-routing.module";
import { StudentsComponent } from "./students.component";
import { TablesModule } from "src/app/components/table/tables.module";
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/materials/material.module';



@NgModule({
  declarations: [StudentsComponent],
  imports: [CommonModule, StudentsRoutingModule, TablesModule,HttpClientModule,MaterialModule],
  exports: [StudentsComponent],
})
export class StudentsModule {}
