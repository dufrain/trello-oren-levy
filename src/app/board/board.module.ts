import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardMenuItemComponent } from './boards-menu/board-menu-item/board-menu-item.component';
import { BoardsListComponent } from './boards-list/boards-list.component';
import { BoardsMenuComponent } from './boards-menu/boards-menu.component';
import { BoardsOptionsMenuComponent } from './boards-menu/boards-options-menu/boards-options-menu.component';
import { ColumnComponent } from './column/column.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ColumnItemComponent } from './column/column-item/column-itemcomponent';

@NgModule({
  declarations: [
    BoardsListComponent,
    BoardsMenuComponent,
    BoardsOptionsMenuComponent,
    BoardMenuItemComponent,
    ColumnComponent,
    ColumnItemComponent,
  ],
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  exports: [ColumnComponent],
})
export class BoardModule {}
