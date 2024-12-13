import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoundingPage } from './bounding.page';

describe('BoundingPage', () => {
  let component: BoundingPage;
  let fixture: ComponentFixture<BoundingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
