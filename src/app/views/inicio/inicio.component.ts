import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.scss"],
})
export class InicioComponent implements OnInit {
  form: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.codeForm();
  }

  codeForm() {
    this.form = this._fb.group({
      code: [null, Validators.required],
    });
  }
}
