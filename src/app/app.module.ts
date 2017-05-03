import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { StoreModule, combineReducers } from '@ngrx/store';

import { CoreModule, coreReducer } from './core';
import { CustomizationModule } from './customization';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    StoreModule.forRoot({ coreModuleProperty: coreReducer }, {
      initialState: { coreModuleProperty : 'Hello from core module: Initial Value' },
      reducerFactory: combineReducers
    }),
    CustomizationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }