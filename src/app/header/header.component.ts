import { Component} from '@angular/core';
import { introduction, myJourney, skillsSection, socialMediaLinks } from '../../../data';
import { trigger, style, query, transition, stagger, animate } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations:[
    trigger("animateMenu",[
      transition(":enter",[
        query("*", [
          style({opacity: 0, transform: "translateY(-50%)"}),
          stagger(50,[
            animate(
              "250ms cubic-bezier(0.35, 0, 0.25, 1)",
              style({opacity: 1, transform: "none"}))
          ])
        ])
      ])
    ])
  ]
})
export class HeaderComponent {
  
  greeting = introduction;
  information = { introduction, socialMediaLinks, skillsSection, myJourney }

  scrollToSection(event: Event, section: string) {
    event.preventDefault(); 
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

}
