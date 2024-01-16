import { Component } from '@angular/core';
import {TranslateService } from '@ngx-translate/core'

import { MainService } from '../../../shared/services/main/main.service';

@Component({
  selector: 'dynamic-sidebar',
  templateUrl: './dynamic-sidebar.component.html',
  styleUrl: './dynamic-sidebar.component.scss'
})
export class DynamicSidebarComponent {

  isStaticSidebar:boolean = false;


  constructor(public mainService: MainService, private translate: TranslateService){
  }

  closeSidebar(){
    this.mainService.sidebarVisible = false;
  }

  fixSidebarPosition(){
    
  }

}
