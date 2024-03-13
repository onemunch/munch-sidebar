import { Component } from '@angular/core';
import { MainService } from '../../modules/shared/services/main/main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  
  logoHidden:boolean = false;

  constructor(public mainService:MainService){}

  isSidebarStatic(localData: any): boolean {
    return localData?.isStaticSidebar;
  }

  toggleLogo(hide: boolean): void {
    const width:number = parseInt(localStorage.getItem("screenWidth") as string);
    if(width <= 700){
      this.logoHidden = hide;
    }
  }

}
