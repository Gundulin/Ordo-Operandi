import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameFooterComponent } from './frame-footer.component';

describe('FrameFooterComponent', () => {
  let component: FrameFooterComponent;
  let fixture: ComponentFixture<FrameFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrameFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
