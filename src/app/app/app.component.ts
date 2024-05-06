import { Component, OnInit } from '@angular/core';
import * as AOS from "aos";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'GhatFoundation';

  ngOnInit(): void {

    AOS.init();//AOS - 2 {disable: 'mobile'}
    AOS.refresh();//refresh method is called on window resize and so on, as it doesn't require to build new store with AOS elements and should be as light as possible.
    
    
    document
    .querySelector('.menu-toggle')
    ?.addEventListener('click', (e: any) => {
      document.querySelector('.nav')?.classList.toggle('mobile-nav');
      document.querySelector('.menu-toggle')?.classList.toggle('is-active');
    });


    window.addEventListener('scroll', (e) => {
      if (window.scrollY > 10) {
        document.querySelector('.navbar')?.classList.add('scrolling');

      } else {
        document.querySelector('.navbar')?.classList.remove('scrolling');

        
      }
    });

  }
}
