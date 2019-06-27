import { Component, OnInit, ViewChild } from '@angular/core';
import { IntermediaryService } from './service/intermediary.service';
import { VictimizationGraphComponent } from './components/victimization-graph/victimization-graph.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public idState: number = 1;

  @ViewChild(VictimizationGraphComponent, { static: false }) victimizationGraphComponent: VictimizationGraphComponent;

  constructor(
    private intermediaryService: IntermediaryService
  ) { }

  ngOnInit() {
  }

  public setIdState = (idState: number) => this.idState = idState;

}
