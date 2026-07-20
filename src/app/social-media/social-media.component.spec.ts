import { TestBed } from '@angular/core/testing';
import { describe, it, expect } from 'vitest';
import { SocialMediaComponent } from './social-media.component';

describe('SocialMediaComponent', () => {
  it('should create the SocialMediaComponent', () => {
    const fixture = TestBed.createComponent(SocialMediaComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
