import { Injectable, OnInit } from '@angular/core';
import { ColumnItem } from './column/column-item.model';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  columnItems: ColumnItem[] = [];
  boardStates!: string[];

  constructor() {
    this.columnItems.push({
      content: 'content of a card',
      isShowIcons: true,
      img: '',
      state: 1,
    } as ColumnItem);

    this.columnItems.push({
      content: 'content of a card 2',
      isShowIcons: true,
      img: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      state: 1,
    } as ColumnItem);

    this.boardStates = ['Todo', 'In Progress', 'Done'];
  }

  getBoardStateName(state: number) {
    return this.boardStates[1];
  }

  getColumnItems() {
    return this.columnItems;
  }
}
