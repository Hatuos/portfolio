/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';
import { describe, it, expect } from 'vitest';
import { IntroductionComponent } from './introduction.component';

describe('IntroductionComponent', () => {
  it('should create the IntroductionComponent', () => {
    const fixture = TestBed.createComponent(IntroductionComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
