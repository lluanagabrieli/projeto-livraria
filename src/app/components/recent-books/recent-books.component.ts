import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-recent-books',
  templateUrl: './recent-books.component.html',
  styleUrls: ['./recent-books.component.css'],
})
export class RecentBooksComponent {
  swiper: any;
  slidesPerView!: number;
  screenWidth!: number;

  @HostListener('window:resize')
  getScreenWidth() {
    this.screenWidth = window.innerWidth;

    if (this.screenWidth >= 320 && this.screenWidth <= 480) {
      this.slidesPerView = 1;
    } else if (this.screenWidth >= 481 && this.screenWidth <= 992) {
      this.slidesPerView = 2;
    } else if (this.screenWidth >= 993) {
      this.slidesPerView = 3;
    }
  }
}
