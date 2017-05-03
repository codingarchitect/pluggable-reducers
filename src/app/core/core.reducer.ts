import { Store, Action } from '@ngrx/store';

export interface State {
  coreModuleProperty: string
}

export const CORE_ACTION_1: string = 'CORE_ACTION_1'

export class CoreAction1 implements Action {
  readonly type: string = CORE_ACTION_1;
  constructor(public payload: any) { }
}

export function coreReducer(state: string, action: Action): string {
  switch (action.type) {
    case CORE_ACTION_1: {
      const newState = state + ": Touched by CORE_ACTION_1"
      return newState;
    }
    default: {
      return state;
    }
  }
}

export const getState = (state:State)=>state;