import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LansiaPage } from './lansia.page';

describe('LansiaPage', () => {
  let component: LansiaPage;
  let fixture: ComponentFixture<LansiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LansiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
