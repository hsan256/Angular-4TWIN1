import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRayonsComponent } from './all-rayons.component';

describe('AllRayonsComponent', () => {
  let component: AllRayonsComponent;
  let fixture: ComponentFixture<AllRayonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRayonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRayonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
