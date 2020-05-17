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
import { IStudent } from "src/app/interfaces/istudent";
import { Router } from "@angular/router";

@Component({
  selector: "app-table-paginator",
  templateUrl: "./table-paginator.component.html",
  styleUrls: ["./table-paginator.component.scss"],
})
export class TablePaginatorComponent implements OnInit {
  dataSource: MatTableDataSource<any>;

  @Input() displayedColumns: string[] = [
    "name",
    "email",
    "university.code",
    "semester",
    "state",
  ];
  @Input() elementData: any[];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.elementData);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  selectStudent(item: IStudent) {
    console.log(item);
    this.router.navigateByUrl(`/estudiante/${item._id}`);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
