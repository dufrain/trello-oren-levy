import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardMenuItemComponent } from './boards-menu/board-menu-item/board-menu-item.component';
import { BoardsListComponent } from './boards-list/boards-list.component';
import { BoardsMenuComponent } from './boards-menu/boards-menu.component';
import { BoardsOptionsMenuComponent } from './boards-menu/boards-options-menu/boards-options-menu.component';
import { ColumnComponent } from './column/column.component';



@NgModule({
  declarations: [BoardsListComponent, BoardsMenuComponent, BoardsOptionsMenuComponent, BoardMenuItemComponent, ColumnComponent],
  imports: [
    CommonModule
  ]
})
export class BoardModule { }
