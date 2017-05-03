import { Store, Action } from '@ngrx/store';

export const CUSTOM_ACTION_1: string = 'CUSTOM_ACTION_1'

export class CustomAction1 implements Action {
  readonly type: string = CUSTOM_ACTION_1;
  constructor(public payload: any) { }
}

export function customizationReducer(state: string, action: Action): string {
  switch (action.type) {
    case CUSTOM_ACTION_1: {      
      const newState =  state + ": Touched by CUSTOM_ACTION_1"
      return newState;
    }
    default: {
      return state;
    }
  }
}

export const getState = (state: any) => state.custom;