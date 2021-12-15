import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDetailFournisseurComponent } from './list-detail-fournisseur.component';

describe('ListDetailFournisseurComponent', () => {
  let component: ListDetailFournisseurComponent;
  let fixture: ComponentFixture<ListDetailFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDetailFournisseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDetailFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
