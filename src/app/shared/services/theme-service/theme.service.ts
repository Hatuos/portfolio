import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { inject, Injectable, signal } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly browser = isPlatformBrowser(this.platformId);

  readonly isLightTheme = signal(this.readStoredTheme());

  constructor() {
    this.applyTheme(this.isLightTheme());
  }

  toggle(): void {
    const isLightTheme = !this.isLightTheme();

    this.isLightTheme.set(isLightTheme);
    this.applyTheme(isLightTheme);

    if (this.browser) {
      localStorage.setItem('portfolio-theme', isLightTheme ? 'light' : 'dark');
    }
  }

  private readStoredTheme(): boolean {
    return this.browser && localStorage.getItem('portfolio-theme') === 'light';
  }

  private applyTheme(isLightTheme: boolean): void {
    this.document.documentElement.classList.toggle('light-theme', isLightTheme);
  }
}