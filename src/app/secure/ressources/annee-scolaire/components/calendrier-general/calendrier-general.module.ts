import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendrierGeneralRoutingModule } from './calendrier-general-routing.module';
import { CalendrierGeneralComponent } from './calendrier-general.component';
import { AnneeScolaireModule } from '../../annee-scolaire.module';


@NgModule({
  declarations: [
    CalendrierGeneralComponent
  ],
  imports: [
    CommonModule,
    CalendrierGeneralRoutingModule,
    AnneeScolaireModule
  ]
})
export class CalendrierGeneralModule { }
