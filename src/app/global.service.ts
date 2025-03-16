import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  activeTab: any = sessionStorage.getItem('header') ? sessionStorage.getItem('header') : 'home';


  reviews: any = [
    {
      name: "Rahul Gupta",
      img: "assets/images/profile-user.png",
      message: "Exelent , good , great, humble, honest , hard work, 👍👍👍",
      review: "5"
    },
    {
      name: "Ajay Panigrahi",
      img: "assets/images/profile-user.png",
      message: "Good work.. Creative minds to make look event beautiful.. Humble personality of you two.. Loved the work highly recommend 😊😊😊",
      review: "5"
    },
    {
      name: "Dixit Ramavat",
      img: "assets/images/profile-user.png",
      message: `One of the best.
      Doing his work in detail
      Takes our suggestions also shares his suggestion have called him twice and he has done good job.
      So highly recommend....`,
      review: "5"
    },
    {
      name: "Nupur Shriiram",
      img: "assets/images/profile-user.png",
      message: "Good design and decorations",
      review: "5"
    },
    {
      name: "Shilpa Gupta",
      img: "assets/images/profile-user.png",
      message: "The decorations are so beautiful and attractive and qualities of balloons are so good. The company's service is on time and mind blowing. Overall i love w@w ballons event.",
      review: "5"
    },
    {
      name: "Amisha prasad",
      img: "assets/images/profile-user.png",
      message: "There is a amazing decoration that you have  provided to us thanks you to making a days more special to your woderful decorations and for  your service .",
      review: "5"
    },

  ]

  responsiveOptions: any = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1200px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '992px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '576px',
      numVisible: 1,
      numScroll: 1
    }

  ]

  constructor(private router: Router) { }
}
