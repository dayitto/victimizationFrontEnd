import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StateService } from '../../service/state.service';
import { State } from '../../model/state.model';

@Component({
  selector: 'state-select',
  templateUrl: './state-select.component.html'
})
export class StateSelectComponent implements OnInit {

  public states: Array<State> = [];
  public idState: number = 1;

  @Output() setState = new EventEmitter();

  constructor(
    private stateService: StateService
  ) { }

  ngOnInit() {
    this.stateService.getStates()
      .subscribe((states: Array<State>) => {
        this.states = states;
      }, (errorResponse) => { });
  }

  changeState = () => this.setState.emit(this.idState);

}
