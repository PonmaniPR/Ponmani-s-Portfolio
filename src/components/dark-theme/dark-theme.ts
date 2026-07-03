import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme-service';
import { ScrollService } from '../../services/scroll-service';

@Component({
  selector: 'app-dark-theme',
  imports: [],
  templateUrl: './dark-theme.html',
  styleUrl: './dark-theme.css',
})
export class DarkTheme {
  constructor(
    public themeService: ThemeService,
    public scrollService: ScrollService,
  ) {}
}
