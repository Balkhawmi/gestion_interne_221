import { Component } from '@angular/core';

@Component({
  selector: 'app-ue',
  templateUrl: './ue.component.html',
  styleUrls: ['./ue.component.css']
})
export class UeComponent {
  mention = [
    { label: 'Mention 1', value: 'M1' },
    { label: 'Mention 2', value: 'M2' }
  ];
}
