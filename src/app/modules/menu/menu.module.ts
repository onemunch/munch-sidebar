import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { GeneralMenuComponent } from './components/general-menu/general-menu.component';
import { CreatorMenuComponent } from './components/creator-menu/creator-menu.component';
import { ConsumerMenuComponent } from './components/consumer-menu/consumer-menu.component';
import { DynamicSidebarComponent } from './components/dynamic-sidebar/dynamic-sidebar.component';


@NgModule({
  declarations: [
    MenuComponent,
    GeneralMenuComponent,
    CreatorMenuComponent,
    ConsumerMenuComponent,
    DynamicSidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MenuRoutingModule
  ],
  exports:[
    MenuComponent
  ],
  bootstrap: [ GeneralMenuComponent, MenuComponent]
})
export class MenuModule { }
