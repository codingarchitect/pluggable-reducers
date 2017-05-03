import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaStandardComponent } from './ca-standard/ca-standard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CaStandardComponent],
  exports: [CaStandardComponent]
})
export class CoreModule { }
