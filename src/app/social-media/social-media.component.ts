import { Component } from '@angular/core';
import { socialMediaLinks } from '../../../data';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
  socialMediaLinks = socialMediaLinks;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
}