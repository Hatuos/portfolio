import { Component } from '@angular/core';
import { introduction } from '../../../data';
import { SocialMediaComponent } from '../social-media/social-media.component';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [SocialMediaComponent],
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
  greeting = introduction;
}
