import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { DataService } from '../data/data.service';
import { Title } from '@angular/platform-browser';
import { NgwWowService } from 'ngx-wow';
import WOW from 'wow.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  title = 'Nice Balloon Party Decoration | Mumbai | Unique Balloon Decor for Birthdays & Parties';
  items = [
    { name: 'Magicians', svg:'' },
    { name: 'Fireworks & Dry Ice', svg:'' },
    { name: 'Decoration', svg:'' },
    { name: 'Bachelorette Party', svg:'' },
    { name: 'Sweet Table', svg:'' }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 31,
      numScroll: 1
    }
  ];

  constructor(private router: Router, public global: GlobalService, public data: DataService, private titleService: Title, private wowService: NgwWowService) {
    this.titleService.setTitle(this.title); 
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

  }
  
  navigateTo(val: any, tab: any) {
    this.router.navigate([val])
    this.global.activeTab = tab;
    sessionStorage.setItem('header', tab)
  } 
  
  ngOnInit(): void { 
    new WOW().init();
    this.wowService.init();
    window.scrollTo(0, 0)
  }
   
  
}
