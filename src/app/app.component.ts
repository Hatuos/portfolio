import { Component, signal, WritableSignal } from '@angular/core';
import { IntroductionComponent } from '@app/introduction/introduction.component';
import { HeaderComponent } from '@app/header/header.component';
import { SkillsComponent } from '@app/skills/skills.component';
import { WorkExperienceComponent } from '@app/work-experience/work-experience.component';
import { ProjectsComponent } from '@app/projects/projects.component';
import { introduction, myJourney, projectsSection, skillsSection } from '../../data';
import { SessionStorageService } from '@shared/services/session-storage-service/session-storage-service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IntroductionComponent,
    HeaderComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ProjectsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: String = 'portfolio';
  information = { introduction, skillsSection, myJourney, projectsSection };
  showAppContent: WritableSignal<boolean> = signal(false);
  showInitAnimation: WritableSignal<boolean> = signal(true);

  INTRO_ANIMATION_KEY: string = 'intro-animation-seen';

  constructor(private readonly storage: SessionStorageService) {}

  onLoadingPageEnd(): void {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    window.scrollTo(0, 0);
    this.storage.set(this.INTRO_ANIMATION_KEY, 'true');
    this.showAppContent.set(true);
    this.showInitAnimation.set(false);
  }

  ngOnInit() {
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    const introAnimationSeen = this.storage.get(this.INTRO_ANIMATION_KEY);
    if (introAnimationSeen === 'true') {
      this.showAppContent.set(true);
      this.showInitAnimation.set(false);
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      return;
    }
  }
}
