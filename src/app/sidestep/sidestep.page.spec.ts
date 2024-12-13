import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidestepPage } from './sidestep.page';

describe('SidestepPage', () => {
  let component: SidestepPage;
  let fixture: ComponentFixture<SidestepPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SidestepPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
