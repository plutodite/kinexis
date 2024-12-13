import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TendemstancePage } from './tendemstance.page';

describe('TendemstancePage', () => {
  let component: TendemstancePage;
  let fixture: ComponentFixture<TendemstancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TendemstancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
