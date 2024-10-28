import { Component } from '@angular/core';

@Component({
  selector: 'app-sous-classe',
  templateUrl: './sous-classe.component.html',
  styleUrls: ['./sous-classe.component.css']
})
export class SousClasseComponent {
  classe = [
    { label: ' Classe 1', value: 'C1' },
    { label: ' Classe 2', value: 'C2' }
  ];
}
