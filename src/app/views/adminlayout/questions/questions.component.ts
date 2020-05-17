import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"],
})
export class QuestionsComponent implements OnInit {
  data: any[] = [
    { nombre: "dylan", respuesta: "respueta 1", modulo: "2" },
    { nombre: "dylan", respuesta: "respueta 1", modulo: "2" },
    { nombre: "dylan", respuesta: "respueta 1", modulo: "2" },
    { nombre: "dylan", respuesta: "respueta 1", modulo: "2" },
  ];
  constructor() {}

  ngOnInit(): void {}
}
