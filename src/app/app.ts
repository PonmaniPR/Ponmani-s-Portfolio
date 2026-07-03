import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from '../components/nav-bar/nav-bar';
import { Footer } from '../components/footer/footer';
import { ScrollTop } from '../components/scroll-top/scroll-top';
import { ThemeService } from '../services/theme-service';
import { DarkTheme } from '../components/dark-theme/dark-theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBar, Footer, ScrollTop, DarkTheme],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Ponmani Portfolio');

  constructor(public themeService: ThemeService) {}
}
