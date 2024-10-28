import { Component } from '@angular/core';

@Component({
  selector: 'app-mention',
  templateUrl: './mention.component.html',
  styleUrls: ['./mention.component.css']
})
export class MentionComponent {
  domaine = [
    { label: 'Domaine 1', value: 'D1' },
    { label: 'Domaine 2', value: 'D2' }
  ];
}
