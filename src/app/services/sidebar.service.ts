import { Injectable } from "@angular/core";
import { IMenuItem } from "../interfaces/imenu-item";

@Injectable({
  providedIn: "root",
})
export class SidebarService {
  menuitems: IMenuItem[] = [
    {
      path: "dashboard",
      icon: "dashboard",
      name: "Dashboard",
    },
    {
      path: "estudiantes",
      icon: "supervisor_account",
      name: "Estudiantes",
    },
    {
      path: "preguntas",
      icon: "folder",
      name: "Preguntas",
    },
  ];
  constructor() {}

  getMenu() {
    return this.menuitems;
  }
}
