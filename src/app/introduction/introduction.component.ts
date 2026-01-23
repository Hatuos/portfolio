import { Component } from '@angular/core';
import { introduction } from '../../../data';
import { SocialMediaComponent } from '../social-media/social-media.component';
import { TypedTextComponent } from '../shared/typed-text.component';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [SocialMediaComponent, TypedTextComponent],
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
  greeting = introduction;
}
