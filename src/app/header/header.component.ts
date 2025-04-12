import { Component} from '@angular/core';
import { introduction, myJourney, projectsSection, skillsSection, socialMediaLinks } from '../../../data';
import { trigger, style, query, transition, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  
  greeting = introduction;
  information = { introduction, socialMediaLinks, skillsSection, projectsSection, myJourney }

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
