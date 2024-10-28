import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoraireRoutingModule } from './horaire-routing.module';
import { HoraireComponent } from './horaire.component';
import { ParametreModule } from '../../parametre.module';


@NgModule({
  declarations: [
    HoraireComponent
  ],
  imports: [
    CommonModule,
    HoraireRoutingModule,
    ParametreModule
  ]
})
export class HoraireModule { }
