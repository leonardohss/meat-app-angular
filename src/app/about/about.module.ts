import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { RouterModule, Routes, Router } from "@angular/router";

const ROUTES: Routes = [
  {path: '', component: AboutComponent}
]

@NgModule({
  declarations: [AboutComponent],
  imports: [RouterModule.forChild(ROUTES)]
})

export class AboutModule{}
