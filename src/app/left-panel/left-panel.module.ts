import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { ViewsListComponent } from '../views-list/views-list.component';



@NgModule({
  declarations: [MenuItemComponent, ViewsListComponent],
  imports: [
    CommonModule
  ]
})
export class LeftPanelModule { }
