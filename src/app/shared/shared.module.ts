import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportsMaterialModule } from './imports-material/imports-material/imports-material.module';



@NgModule({
  imports: [
    CommonModule,
    ImportsMaterialModule
  ],
})
export class SharedModule { }
