import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpvidPage } from './upvid.page';

describe('UpvidPage', () => {
  let component: UpvidPage;
  let fixture: ComponentFixture<UpvidPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpvidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
