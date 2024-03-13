import { Component } from '@angular/core';
import { MainService } from '../../../shared/services/main/main.service';

@Component({
  selector: 'static-sidebar',
  templateUrl: './static-sidebar.component.html',
  styleUrl: './static-sidebar.component.scss'
})
export class StaticSidebarComponent {

  isStaticSidebar: boolean = true;

  constructor(public mainService: MainService) { }

  closeSidebar() {
    this.mainService.sidebarVisible = false;
  }

  fixSidebarPosition() {
    localStorage.setItem('isStaticSidebar', this.isStaticSidebar.toString());
    this.mainService.fetchLocalData();
  }

}
