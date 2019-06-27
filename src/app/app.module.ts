import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";

import { VictimizationService } from './service/victimization.service';
import { StateService } from './service/state.service';
import { StateSelectModule } from './components/state-select/state-select.component.module';
import { VictimizationGraphModule } from './components/victimization-graph/victimization-graph.component.module';
import { IntermediaryService } from './service/intermediary.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StateSelectModule,
    VictimizationGraphModule,
    FormsModule
  ],
  providers: [
    VictimizationService,
    StateService,
    IntermediaryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
