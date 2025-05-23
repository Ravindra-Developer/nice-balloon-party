import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isSidebarOpen = false;
    
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  
  navigateTo(route: string) {
    // Implement navigation logic
  }
}
