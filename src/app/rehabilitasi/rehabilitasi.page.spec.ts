import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RehabilitasiPage } from './rehabilitasi.page';

describe('RehabilitasiPage', () => {
  let component: RehabilitasiPage;
  let fixture: ComponentFixture<RehabilitasiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RehabilitasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
