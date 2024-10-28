import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggleSidebar() {
    this.toggleSidebar.emit();
  }

  anneeScolaire = [
    { label: 'Année: 2023-2024', value: '2023-2024' },
    { label: 'Année: 2024-2025', value: '2024-2025' }
  ];
}
