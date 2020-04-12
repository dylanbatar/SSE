import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pie",
  templateUrl: "./pie.component.html",
  styleUrls: ["./pie.component.scss"],
})
export class PieComponent implements OnInit {
  single: any[] = [
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
  multi: any[];

  view: any[] = [700, 400];

  // options

  gradient = false;
  showLegend = true;

  // colorScheme = {
  //   domain: ["#5AA454", "#A10A28", "#C7B42C", "#AAAAAA"],
  // };
  constructor() {}

  ngOnInit(): void {}
}
