import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SinglegstancePage } from './singlegstance.page';

describe('SinglegstancePage', () => {
  let component: SinglegstancePage;
  let fixture: ComponentFixture<SinglegstancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglegstancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
