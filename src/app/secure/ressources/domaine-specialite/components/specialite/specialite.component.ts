import { Component } from '@angular/core';

@Component({
  selector: 'app-specialite',
  templateUrl: './specialite.component.html',
  styleUrls: ['./specialite.component.css']
})
export class SpecialiteComponent {


  domaine = [
    { label: 'Domaine 1', value: 'D1' },
    { label: 'Domaine 2', value: 'D2' }
  ];

  niveau = [
    { label: 'Niveau 1', value: 'N1' },
    { label: 'Niveau 2', value: 'N2' }
  ];

  mention = [
    { label: 'Mention 1', value: 'M1' },
    { label: 'Mention 2', value: 'M2' }
  ];
}
