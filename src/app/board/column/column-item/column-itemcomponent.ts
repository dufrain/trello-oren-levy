import { Component, Input, OnInit } from '@angular/core';
import { ColumnItem } from '../column-item.model';

@Component({
  selector: 'app-column-item',
  templateUrl: './column-item.component.html',
  styleUrls: ['./column-item.component.scss'],
})
export class ColumnItemComponent implements OnInit {
  @Input() item!: ColumnItem;
  constructor() {}

  ngOnInit(): void {}
}
