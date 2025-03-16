import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  currentYear!: number;
  constructor(private router: Router, public global: GlobalService) { }

  ngOnInit() {
    this.getCurrentYear();
  }

  getCurrentYear() {
    this.currentYear = new Date().getFullYear();
  }

  navigateTo(val: any) {
    this.router.navigate([val]);
    this.global.activeTab = val;
    sessionStorage.setItem('header', val);
    window.scrollTo(0, 0)
  }
}
