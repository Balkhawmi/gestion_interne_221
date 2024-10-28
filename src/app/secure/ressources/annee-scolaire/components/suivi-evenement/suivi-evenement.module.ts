import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuiviEvenementRoutingModule } from './suivi-evenement-routing.module';
import { SuiviEvenementComponent } from './suivi-evenement.component';
import { AnneeScolaireModule } from '../../annee-scolaire.module';


@NgModule({
  declarations: [
    SuiviEvenementComponent
  ],
  imports: [
    CommonModule,
    SuiviEvenementRoutingModule,
    AnneeScolaireModule
  ]
})
export class SuiviEvenementModule { }
