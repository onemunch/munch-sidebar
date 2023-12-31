import { Component } from '@angular/core';
import { GENERAL_MENU_OPTIONS } from '../../constants/general-menu-options';

@Component({
  selector: 'general-menu',
  templateUrl: './general-menu.component.html',
  styleUrl: './general-menu.component.scss'
})
export class GeneralMenuComponent {

  generalMenuOptions:any = GENERAL_MENU_OPTIONS

}
