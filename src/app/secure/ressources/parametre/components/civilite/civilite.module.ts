import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CiviliteRoutingModule } from './civilite-routing.module';
import { CiviliteComponent } from './civilite.component';
import { ParametreModule } from '../../parametre.module';


@NgModule({
  declarations: [
    CiviliteComponent
  ],
  imports: [
    CommonModule,
    CiviliteRoutingModule,
    ParametreModule
  ]
})
export class CiviliteModule { }
