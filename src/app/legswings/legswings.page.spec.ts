import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LegswingsPage } from './legswings.page';

describe('LegswingsPage', () => {
  let component: LegswingsPage;
  let fixture: ComponentFixture<LegswingsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LegswingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
