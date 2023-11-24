import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmacionRestablecerPage } from './confirmacion-restablecer.page';

describe('ConfirmacionRestablecerPage', () => {
  let component: ConfirmacionRestablecerPage;
  let fixture: ComponentFixture<ConfirmacionRestablecerPage>;

  beforeEach(async (() => {
    fixture = TestBed.createComponent(ConfirmacionRestablecerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
