import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { VictimizationGraphComponent } from './victimization-graph.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    VictimizationGraphComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    ChartsModule
  ],

  exports: [VictimizationGraphComponent]
})
export class VictimizationGraphModule { }