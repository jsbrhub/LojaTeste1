import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatGridListModule
    
  ],

})
export class ImportsMaterialModule { }
