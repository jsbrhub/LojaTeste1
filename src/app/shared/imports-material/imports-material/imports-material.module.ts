import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule
  ],

})
export class ImportsMaterialModule { }
