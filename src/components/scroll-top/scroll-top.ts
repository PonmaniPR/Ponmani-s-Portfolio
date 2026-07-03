import { Component, HostListener } from '@angular/core';
import { ScrollService } from '../../services/scroll-service';

@Component({
  standalone: true,
  selector: 'app-scroll-top',
  imports: [],
  templateUrl: './scroll-top.html',
  styleUrl: './scroll-top.css',
})
export class ScrollTop {
  constructor(public scrollService: ScrollService) {}

  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrollService.showScrollTop.set(window.scrollY > 100);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
