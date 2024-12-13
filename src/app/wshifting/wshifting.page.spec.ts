import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WshiftingPage } from './wshifting.page';

describe('WshiftingPage', () => {
  let component: WshiftingPage;
  let fixture: ComponentFixture<WshiftingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WshiftingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
