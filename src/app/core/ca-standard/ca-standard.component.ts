import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { State, CoreAction1, getState } from '../core.reducer';

@Component({
  selector: 'ca-standard',
  templateUrl: './ca-standard.component.html',
  styleUrls: ['./ca-standard.component.css']
})
export class CaStandardComponent implements OnInit {

  private state: State;
  constructor(private store: Store<State>) {
    this.store.select(getState).subscribe((state) => {
      this.state = state;
    })
  }

  ngOnInit() {
  }

  dispatchAction() {
    this.store.dispatch(new CoreAction1("pay load for CORE_ACTION_1"));
  }
}
