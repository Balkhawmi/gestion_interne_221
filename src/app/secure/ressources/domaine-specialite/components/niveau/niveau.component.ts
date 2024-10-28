import { Component } from '@angular/core';

@Component({
  selector: 'app-niveau',
  templateUrl: './niveau.component.html',
  styleUrls: ['./niveau.component.css']
})
export class NiveauComponent {
  cycle = [
    { label: 'Cycle 1', value: 'C1' },
    { label: 'Cycle 2', value: 'C2' }
  ];
}
