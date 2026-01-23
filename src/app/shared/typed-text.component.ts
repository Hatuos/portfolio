import { Component, OnDestroy, OnInit } from '@angular/core';
import { introduction } from '../../../data';

@Component({
  selector: 'app-typed-text',
  standalone: true,
  imports: [],
  templateUrl: './typed-text.component.html',
  styleUrls: ['./typed-text.component.scss']
})
export class TypedTextComponent implements OnInit, OnDestroy {

  private typedText: string[] = introduction.typedText;
  private typeSpeed: number = 100;
  private backSpeed: number = 35;

  private currentTextIndex: number = 0;
  private currentCharIndex: number = 0;
  private typingInterval: any = null;
  protected displayText: string = '';

  ngOnInit(): void {
    setTimeout(() => this.startTyping(), 3000);
  }

  ngOnDestroy(): void {
    if (this.typingInterval) {
      clearTimeout(this.typingInterval);
    }
  }

  private startTyping(): void {
    if (this.typedText.length > 0) { this.typeText(); }
  }

  private typeText(): void {
    const currentString = this.typedText[this.currentTextIndex];
    this.displayText = currentString.slice(0, this.currentCharIndex + 1);

    if (this.currentCharIndex < currentString.length - 1) {
      this.currentCharIndex++;
      this.typingInterval = setTimeout(() => this.typeText(), this.typeSpeed);
    } else {
      setTimeout(() => this.deleteText(), 1500);
    }
  }

  private deleteText(): void {
    const currentString = this.typedText[this.currentTextIndex];

    if (this.currentCharIndex > 0) {
      this.currentCharIndex--;
      this.displayText = currentString.slice(0, this.currentCharIndex);
      this.typingInterval = setTimeout(() => this.deleteText(), this.backSpeed);
    } else {
      this.currentTextIndex = (this.currentTextIndex + 1) % this.typedText.length;
      setTimeout(() => this.typeText(), 500);
    }
  }

}
