import { Component } from '@angular/core';
import { DataService } from '../data/data.service';
import { Title } from '@angular/platform-browser';
import { NgwWowService } from 'ngx-wow';
import WOW from 'wow.js';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  title = 'Gallery - Nice Balloon Party decoration';

  constructor(public data: DataService,private titleService: Title, private wowService: NgwWowService) {
    this.titleService.setTitle(this.title);

    window.scrollTo(0, 0)
    console.log(this.data.galleryData)
  }

  ngOnInit(): void { 
    new WOW().init();
    this.wowService.init();
  }
}
