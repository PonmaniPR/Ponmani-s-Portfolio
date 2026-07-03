import { Injectable, inject, PLATFORM_ID, signal, computed } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);

  readonly heroImage = computed(() =>
    this.isDark() ? '/images/dark-backdrop.jpg' : '/images/backdrop.jpg',
  );

  private readonly _isDark = signal(false);
  readonly isDark = computed(() => this._isDark());

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadTheme();
    }
  }

  toggleTheme() {
    this.setTheme(!this._isDark());
  }

  setTheme(isDark: boolean) {
    this._isDark.set(isDark);

    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    if (isDark) {
      document.body.classList.add('dark-background');
    } else {
      document.body.classList.remove('dark-background');
    }

    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  private loadTheme() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      this.setTheme(savedTheme === 'dark');
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    this.setTheme(prefersDark);
  }
}
