import { Component, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-frame-header',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './frame-header.component.html',
  styleUrl: './frame-header.component.css'
})
export class FrameHeaderComponent {
  @Output()
  myTurn: EventEmitter<any> = new EventEmitter();

  @Output()
  opponentTurn: EventEmitter<any> = new EventEmitter();

  onMyTurnPush() {
    this.myTurn.emit();
  }

  onOpponentTurnPush() {
    this.opponentTurn.emit();
  }
}
