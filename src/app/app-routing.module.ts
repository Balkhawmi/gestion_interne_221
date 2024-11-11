import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'ressources', loadChildren: () => import('./secure/ressources/ressources.module').then(m => m.RessourcesModule) },
  
{ path: 'inscriptionReinscriptions', loadChildren: () => import('./secure/inscription-reinscriptions/inscription-reinscriptions.module').then(m => m.InscriptionReinscriptionsModule) },
  
{ path: 'referentiels', loadChildren: () => import('./secure/referentiels/referentiels.module').then(m => m.ReferentielsModule) },
  
{ path: 'planning', loadChildren: () => import('./secure/planning/planning.module').then(m => m.PlanningModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
