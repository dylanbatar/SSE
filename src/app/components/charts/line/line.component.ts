import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-line",
  templateUrl: "./line.component.html",
  styleUrls: ["./line.component.scss"],
})
export class LineComponent implements OnInit {
  multi: any[] = [
    {
      name: "Germany",
      series: [
        {
          name: "1990",
          value: 62000000,
        },
        {
          name: "2010",
          value: 73000000,
        },
        {
          name: "2011",
          value: 89400000,
        },
      ],
    },

    {
      name: "USA",
      series: [
        {
          name: "1990",
          value: 250000000,
        },
        {
          name: "2010",
          value: 309000000,
        },
        {
          name: "2011",
          value: 311000000,
        },
      ],
    },

    {
      name: "France",
      series: [
        {
          name: "1990",
          value: 58000000,
        },
        {
          name: "2010",
          value: 50000020,
        },
        {
          name: "2011",
          value: 58000000,
        },
      ],
    },
    {
      name: "UK",
      series: [
        {
          name: "1990",
          value: 57000000,
        },
        {
          name: "2010",
          value: 62000000,
        },
      ],
    },
  ];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = "Year";
  yAxisLabel: string = "Population";

  constructor() {}

  ngOnInit(): void {}
}
