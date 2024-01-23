import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseWindowComponent } from './phase-window.component';

describe('PhaseWindowComponent', () => {
  let component: PhaseWindowComponent;
  let fixture: ComponentFixture<PhaseWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhaseWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhaseWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
