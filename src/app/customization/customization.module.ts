import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule, combineReducers } from '@ngrx/store';
 
import { CaCustomComponent } from './ca-custom/ca-custom.component';
import { customizationReducer } from './customization.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('custom', { custom: customizationReducer }, {
      initialState: { custom : 'Hello from customization module: Initial Value' },
      reducerFactory: combineReducers
    })
  ],
  declarations: [CaCustomComponent],
  exports: [CaCustomComponent]
})
export class CustomizationModule { }
