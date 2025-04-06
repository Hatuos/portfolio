import { Component } from '@angular/core';
import { IntroductionComponent } from './introduction/introduction.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { introduction, myJourney, projectsSection, skillsSection } from '../../data';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IntroductionComponent, HeaderComponent, SkillsComponent, WorkExperienceComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1})),
      state('hidden', style({ opacity: 0,})),
      transition('visible => hidden', [animate('1s')]),
      transition('hidden => visible', [animate('1s')]),
    ]),
  ]
})
export class AppComponent {

  loadingPageState = 'visible';
  appPageState = 'hidden';

  title = 'portfolio';
  information = { introduction, skillsSection, myJourney, projectsSection };

  ngOnInit() {
    setTimeout(() => {
      this.loadingPageState = 'hidden';
      this.appPageState = 'visible';
    }, 3000);
  }

}