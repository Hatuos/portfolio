import { Component } from '@angular/core';
import { projectsSection } from '../../../data';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  projectsSectionHeading = projectsSection.title;
  projectsSection = projectsSection;
  
}
