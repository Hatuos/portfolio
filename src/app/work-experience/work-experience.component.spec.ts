import { TestBed } from '@angular/core/testing';
import { describe, beforeEach, it, expect } from 'vitest';
import { WorkExperienceComponent } from './work-experience.component';

describe('WorkExperienceComponent', () => {
  it('should create the WorkExperienceComponent', () => {
    const fixture = TestBed.createComponent(WorkExperienceComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
