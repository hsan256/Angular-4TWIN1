import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDetailFournisseurComponent } from './edit-detail-fournisseur.component';

describe('EditDetailFournisseurComponent', () => {
  let component: EditDetailFournisseurComponent;
  let fixture: ComponentFixture<EditDetailFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDetailFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDetailFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
