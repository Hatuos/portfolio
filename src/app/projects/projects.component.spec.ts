import { TestBed } from '@angular/core/testing';
import { describe, it, expect } from 'vitest';
import { ProjectsComponent } from './projects.component';

describe('ProjectsComponent', () => {
  it('should create the ProjectsComponent', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
