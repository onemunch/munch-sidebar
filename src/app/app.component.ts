import { Component, OnInit } from '@angular/core';
import { MainService } from './modules/shared/services/main/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  title = 'MunCH';

  constructor(public mainService: MainService){}

  ngOnInit() {
  }

}
