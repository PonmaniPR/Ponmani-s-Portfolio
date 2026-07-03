import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkTheme } from './dark-theme';

describe('DarkTheme', () => {
  let component: DarkTheme;
  let fixture: ComponentFixture<DarkTheme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkTheme],
    }).compileComponents();

    fixture = TestBed.createComponent(DarkTheme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
