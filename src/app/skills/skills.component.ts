import { Component } from '@angular/core';
import { skillsSection } from '../../../data';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skillsSection = skillsSection;
  backendSoftwareSkills = skillsSection.backendSoftwareSkills;
  frontendSoftwareSkills = skillsSection.frontendSoftwareSkills;
  databaseSkills = skillsSection.databaseSkills;
  toolsSoftwareSkills = skillsSection.toolsSoftwareSkills;
  skillsSectionHeading = skillsSection.softwareSkillsHeader;

}