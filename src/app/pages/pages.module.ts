import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ValidateFormDirective } from '../directivas/validate-form.directive';
import { ValidatenumberDirective } from '../directivas/validatenumber.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    ValidateFormDirective,
    ValidatenumberDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    ValidateFormDirective,
    ValidatenumberDirective
  ]
})
export class PagesModule { }
