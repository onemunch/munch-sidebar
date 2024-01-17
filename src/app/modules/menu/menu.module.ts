import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';


import { SharedModule } from '../shared/shared.module';
import { createTranslateLoader } from '../../app.module';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { GeneralMenuComponent } from './components/general-menu/general-menu.component';
import { CreatorMenuComponent } from './components/creator-menu/creator-menu.component';
import { ConsumerMenuComponent } from './components/consumer-menu/consumer-menu.component';
import { StaticSidebarComponent } from './components/static-sidebar/static-sidebar.component';
import { DynamicSidebarComponent } from './components/dynamic-sidebar/dynamic-sidebar.component';



@NgModule({
  declarations: [
    MenuComponent,
    GeneralMenuComponent,
    CreatorMenuComponent,
    ConsumerMenuComponent,
    DynamicSidebarComponent,
    StaticSidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MenuRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports:[
    MenuComponent
  ],
  bootstrap: [ GeneralMenuComponent, MenuComponent]
})
export class MenuModule { }
