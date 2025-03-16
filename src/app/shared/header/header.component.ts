import { Component, Renderer2,HostListener  } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent { 
  currentYear!: number;
  constructor(private router: Router,public global: GlobalService) {
    this.currentYear = new Date().getFullYear();
   }
   
  navigateTo(val: any) { 
    this.router.navigate([val]);
    this.global.activeTab = val; 
    sessionStorage.setItem('header', val); 
  }
}
