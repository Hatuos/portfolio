import { Component } from '@angular/core';
import { IntroductionComponent } from './introduction/introduction.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { introduction, myJourney, skillsSection } from '../../data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IntroductionComponent, HeaderComponent, SkillsComponent, WorkExperienceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'portfolio';
  information = { introduction, skillsSection, myJourney }
  
}