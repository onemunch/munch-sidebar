import { Component } from '@angular/core';
import { MainService } from '../../../shared/services/main/main.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})

export class MenuComponent {

  constructor(public mainService: MainService) { }

}
