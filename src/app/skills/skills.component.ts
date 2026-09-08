import { Component, computed, inject } from '@angular/core';
import { skillsSection } from '@data';
import { ThemeService } from '@shared/services/theme-service/theme.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skillsSection = skillsSection;
  private readonly themeService = inject(ThemeService);
  private readonly isLightTheme = this.themeService.isLightTheme;
  readonly backendSoftwareSkills = computed(() =>
    this.getSkillsForTheme(skillsSection.backendSoftwareSkills, this.isLightTheme())
  );
  readonly frontendSoftwareSkills = computed(() =>
    this.getSkillsForTheme(skillsSection.frontendSoftwareSkills, this.isLightTheme())
  );
  readonly databaseSkills = computed(() =>
    this.getSkillsForTheme(skillsSection.databaseSkills, this.isLightTheme())
  );
  readonly toolsSoftwareSkills = computed(() =>
    this.getSkillsForTheme(skillsSection.toolsSoftwareSkills, this.isLightTheme())
  );
  skillsSectionHeading = skillsSection.softwareSkillsHeader;

  private getSkillsForTheme(skills: typeof skillsSection.backendSoftwareSkills, isLightTheme: boolean) {
    return skills.map((skill) => ({
      ...skill,
      badgeURL: this.getBadgeURL(skill.badgeURL, isLightTheme),
    }));
  }

  private getBadgeURL(badgeURL: string, isLightTheme: boolean): string {
    return isLightTheme ? badgeURL.replace(/252423/g, 'F5F5F0') : badgeURL;
  }

}