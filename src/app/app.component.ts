import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import * as appActions from "./state/app.actions"
import { MainService } from './modules/shared/services/main/main.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  title = 'MunCH';

  constructor(public mainService: MainService, private store:Store){}

  ngOnInit() {
    this.mainService.fetchLocalData();
  }

  isSidebarStatic(localData: any): any {
    return localData?.isStaticSidebar;
  }

}
