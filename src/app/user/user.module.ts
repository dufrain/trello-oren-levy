import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPanelComponent } from '../user-panel/user-panel.component';
import { UserSettingsComponent } from '../user-settings/user-settings.component';



@NgModule({
  declarations: [UserPanelComponent, UserSettingsComponent],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
