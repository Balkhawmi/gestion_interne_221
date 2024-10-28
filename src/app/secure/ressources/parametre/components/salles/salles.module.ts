import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SallesRoutingModule } from './salles-routing.module';
import { SallesComponent } from './salles.component';
import { ParametreModule } from '../../parametre.module';


@NgModule({
  declarations: [
    SallesComponent
  ],
  imports: [
    CommonModule,
    SallesRoutingModule,
    ParametreModule
  ]
})
export class SallesModule { }
