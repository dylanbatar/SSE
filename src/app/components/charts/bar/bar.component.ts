import { Component, OnInit, AfterContentInit } from "@angular/core";

@Component({
  selector: "app-bar",
  templateUrl: "./bar.component.html",
  styleUrls: ["./bar.component.scss"],
})
export class BarComponent implements OnInit {
  single: any[] = [];

  view = [400, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = "Country";
  showYAxisLabel = true;
  yAxisLabel = "Population";

  // colorScheme = {
  //   domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"],
  // };
  constructor() {}

  ngOnInit(): void {
    this.single = [
      {
        name: "Germany",
        value: 40632,
        extra: {
          code: "de",
        },
      },
      {
        name: "United States",
        value: 50000,
        extra: {
          code: "us",
        },
      },
      {
        name: "France",
        value: 36745,
        extra: {
          code: "fr",
        },
      },
      {
        name: "United Kingdom",
        value: 36240,
        extra: {
          code: "uk",
        },
      },
      {
        name: "Spain",
        value: 33000,
        extra: {
          code: "es",
        },
      },
      {
        name: "Italy",
        value: 35800,
        extra: {
          code: "it",
        },
      },
    ];
  }

  resize(event): void {
    console.log(event);
    this.view = [400, 0];
  }
}
