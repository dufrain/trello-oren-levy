import { Component, Input, OnInit } from '@angular/core';
import { BoardService } from '../board.service';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent implements OnInit {
  @Input() state!: number;
  constructor(public boardService: BoardService) {}

  stateDescription!: string;

  ngOnInit(): void {
    console.log(
      ' this.boardService.getColumnItems()=',
      this.boardService.getColumnItems()
    );

    this.stateDescription = this.boardService.getBoardStateName(this.state);
  }
}
