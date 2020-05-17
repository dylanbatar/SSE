import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PanelComponent } from "./panel/panel.component";

const routes: Routes = [
  {
    path: "",
    component: PanelComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
      },
      {
        path: "estudiantes",
        loadChildren: () =>
          import("./students/students.module").then((m) => m.StudentsModule),
      },
      {
        path: "estudiante/:id",
        loadChildren: () =>
          import("./profile/profile.module").then((m) => m.ProfileModule),
      },
      {
        path: "preguntas",
        loadChildren: () =>
          import(`./questions/questions.module`).then((m) => m.QuestionsModule),
      },
    ],
  },
  { path: "**", pathMatch: "full", redirectTo: "dashboard" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
