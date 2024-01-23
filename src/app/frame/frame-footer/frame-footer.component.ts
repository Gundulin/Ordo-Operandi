import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-frame-footer',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './frame-footer.component.html',
  styleUrl: './frame-footer.component.css'
})
export class FrameFooterComponent {

  @Output()
  prevPhase: EventEmitter<any> = new EventEmitter();

  @Output()
  nextPhase: EventEmitter<any> = new EventEmitter();

  @Output()
  unitProfiles: EventEmitter<any> = new EventEmitter();

  protected onPrevPush() {
    this.prevPhase.emit();
  }

  protected onNextPush() {
    this.nextPhase.emit();
  }

  protected onUnitProfilesPush() {
    this.unitProfiles.emit();
  }

}
