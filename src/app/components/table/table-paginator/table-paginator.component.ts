import {
  Component,
  OnInit,
  Input,
  ViewChild,
  AfterContentInit,
} from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";
import { MatPaginator } from "@angular/material/paginator";

@Component({
  selector: "app-table-paginator",
  templateUrl: "./table-paginator.component.html",
  styleUrls: ["./table-paginator.component.scss"],
})
export class TablePaginatorComponent implements OnInit, AfterContentInit {
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource: MatTableDataSource<any>;
  @Input() elementData: any[];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit():void {
    this.dataSource = new MatTableDataSource(this.elementData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
