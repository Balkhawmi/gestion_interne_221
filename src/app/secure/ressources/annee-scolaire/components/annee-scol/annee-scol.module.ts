import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnneeScolRoutingModule } from './annee-scol-routing.module';
import { AnneeScolComponent } from './annee-scol.component';
import { AnneeScolaireModule } from '../../annee-scolaire.module';


@NgModule({
  declarations: [
    AnneeScolComponent
  ],
  imports: [
    CommonModule,
    AnneeScolRoutingModule,
    AnneeScolaireModule
  ]
})
export class AnneeScolModule { }
