import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { InicioComponent } from "./views/inicio/inicio.component";
import { PanelComponent } from "./views/adminlayout/panel/panel.component";

const routes: Routes = [
  { path: "inicio", component: InicioComponent },
  // { path: "**", pathMatch: "full", redirectTo: "inicio" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
