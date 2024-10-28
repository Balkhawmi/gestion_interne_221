// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectPersonnaliseComponent } from './components/select-personnalise/select-personnalise.component';

@NgModule({
  declarations: [
    SelectPersonnaliseComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SelectPersonnaliseComponent
  ]
})
export class SharedModule { }
