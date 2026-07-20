import { TestBed } from '@angular/core/testing';
import { describe, it, expect } from 'vitest';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  it('should create the SkillsComponent', () => {
    const fixture = TestBed.createComponent(SkillsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
