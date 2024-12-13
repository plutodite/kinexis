import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SitostandPage } from './sitostand.page';

describe('SitostandPage', () => {
  let component: SitostandPage;
  let fixture: ComponentFixture<SitostandPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SitostandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
