import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-frame-header',
  standalone: true,
  imports: [ButtonModule, SelectButtonModule, FormsModule],
  templateUrl: './frame-header.component.html',
  styleUrl: './frame-header.component.css'
})
export class FrameHeaderComponent {

  @Output()
  turn: EventEmitter<string> = new EventEmitter();

  turnValue: string = 'myTurn';
  turnOptions: any = [{label: 'My Turn', value: 'myTurn'}, {label: 'Opponent\'s Turn', value: 'oppTurn'}];

  onTurnChange() {
    this.turn.emit(this.turnValue);
    console.log('turnValue: ' + this.turnValue);
  }
}
