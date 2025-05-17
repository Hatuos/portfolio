import {Component} from '@angular/core';
import { myJourney } from '../../../data';


@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss'
})
export class WorkExperienceComponent {
  
  experiences = myJourney;

  openLink(link: string) {
    window.open(link);
  }

}
