import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';

import { State, getState } from '../../core';
import { CustomAction1 } from '../customization.reducer';

@Component({
  selector: 'ca-custom',
  templateUrl: './ca-custom.component.html',
  styleUrls: ['./ca-custom.component.css']
})
export class CaCustomComponent implements OnInit {

  private state: State;
  constructor(private store: Store<State>) {
    this.store.select(getState).subscribe((state) => {
      this.state = state;
    })
  }

  ngOnInit() {
  }

  dispatchAction() {
    this.store.dispatch(new CustomAction1("pay load for CUSTOM_ACTION_1"));
  }

}
