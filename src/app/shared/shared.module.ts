import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../materials/material.module';



@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  exports:[FooterComponent,HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
