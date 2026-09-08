import { Component, inject } from '@angular/core';
import { introduction, myJourney, projectsSection, skillsSection, socialMediaLinks } from '@data';
import { ThemeService } from '@shared/services/theme-service/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private readonly themeService = inject(ThemeService);
  readonly isLightTheme = this.themeService.isLightTheme;

  greeting = introduction;
  information = { introduction, socialMediaLinks, skillsSection, projectsSection, myJourney }

  toggleTheme(): void {
    this.themeService.toggle();
  }

  scrollToSection(event: Event, section: string) {
    event.preventDefault(); 
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -50;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

}
