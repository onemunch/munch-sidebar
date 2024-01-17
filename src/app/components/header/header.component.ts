import { Component } from '@angular/core';
import { MainService } from '../../modules/shared/services/main/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  constructor(public mainService:MainService){}

  isSidebarStatic(localData: any): any {
    return localData?.isStaticSidebar;
  }

}
