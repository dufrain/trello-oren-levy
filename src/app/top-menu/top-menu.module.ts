import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { MessagesComponent } from '../messages/messages.component';



@NgModule({
  declarations: [SearchComponent, MessagesComponent],
  imports: [
    CommonModule
  ]
})
export class TopMenuModule { }
