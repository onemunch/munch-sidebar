import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNgModule } from './modules/primeng.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';

const sharedModules:Type<any>[] = [
  PrimeNgModule,
  FontAwesomeModule
]

const sharedComponents:Type<any>[] = [
  ProgressSpinnerComponent
]

@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...sharedModules
  ],
  exports:[
    FormsModule,
    ...sharedComponents,
    ...sharedModules
  ]
})
export class SharedModule { }
