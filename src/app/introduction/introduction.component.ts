import { Component } from '@angular/core';
import { introduction } from '@data';
import { SocialMediaComponent } from '@app/social-media/social-media.component';
import { TypedTextComponent } from '@shared/components/typed-text/typed-text.component';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [SocialMediaComponent, TypedTextComponent],
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {
  greeting = introduction;
}
