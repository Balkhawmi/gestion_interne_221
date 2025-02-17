import { Component } from '@angular/core';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.css']
})
export class ClasseComponent {
  domaine = [
    { label: 'Domaine 1', value: 'D1' },
    { label: 'Domaine 2', value: 'D2' }
  ];

  niveau = [
    { label: 'Niveau 1', value: 'N1' },
    { label: 'Niveau 2', value: 'N2' }
  ];

  specialite = [
    { label: 'Specialite 1', value: 'S1' },
    { label: 'Specialite 2', value: 'S2' }
  ];
}
