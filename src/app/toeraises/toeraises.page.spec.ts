import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToeraisesPage } from './toeraises.page';

describe('ToeraisesPage', () => {
  let component: ToeraisesPage;
  let fixture: ComponentFixture<ToeraisesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ToeraisesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
