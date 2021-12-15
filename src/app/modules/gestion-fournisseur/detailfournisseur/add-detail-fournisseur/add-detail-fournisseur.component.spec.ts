import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailFournisseurComponent } from './add-detail-fournisseur.component';

describe('AddDetailFournisseurComponent', () => {
  let component: AddDetailFournisseurComponent;
  let fixture: ComponentFixture<AddDetailFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDetailFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
