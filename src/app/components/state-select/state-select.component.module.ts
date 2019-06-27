import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { StateSelectComponent } from './state-select.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StateSelectComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    FormsModule
  ],

  exports: [StateSelectComponent]
})
export class StateSelectModule { }
