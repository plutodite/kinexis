import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SlhopsPage } from './slhops.page';

describe('SlhopsPage', () => {
  let component: SlhopsPage;
  let fixture: ComponentFixture<SlhopsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SlhopsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
