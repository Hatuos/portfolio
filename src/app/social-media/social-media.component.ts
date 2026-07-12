import { Component } from '@angular/core';
import { socialMediaLinks } from '@data';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.css'
})
export class SocialMediaComponent {
  socialMediaLinks = socialMediaLinks;
}