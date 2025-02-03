import { Component } from '@angular/core';
import { IntroductionComponent } from './introduction/introduction.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { introduction, myJourney, projectsSection, skillsSection } from '../../data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IntroductionComponent, HeaderComponent, SkillsComponent, WorkExperienceComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'portfolio';
  information = { introduction, skillsSection, myJourney, projectsSection };
  
}