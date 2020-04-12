import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TablePaginatorComponent } from "./table-paginator/table-paginator.component";
import { MaterialModule } from 'src/app/materials/material.module';

@NgModule({
  declarations: [TablePaginatorComponent],
  exports: [TablePaginatorComponent],
  imports: [CommonModule,MaterialModule],
})
export class TablesModule {}
