import { NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChipModule } from 'primeng/chip';
import { TreeModule } from 'primeng/tree';
import { BadgeModule } from 'primeng/badge';
import { ChipsModule } from 'primeng/chips';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { CalendarModule } from 'primeng/calendar';
import { MegaMenuModule } from 'primeng/megamenu';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { TreeTableModule } from 'primeng/treetable';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { StyleClassModule } from 'primeng/styleclass';
import { TreeSelectModule } from 'primeng/treeselect';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ProgressSpinnerModule } from 'primeng/progressspinner';


const primeNgModules: Type<any>[] = [
  TreeModule,
  ChipModule,
  BadgeModule,
  ChipsModule,
  DialogModule,
  ButtonModule,
  AvatarModule,
  CommonModule,
  RippleModule,
  SidebarModule,
  MenubarModule,
  MegaMenuModule,
  CalendarModule,
  CarouselModule,
  CheckboxModule,
  InputTextModule,
  AccordionModule,
  TreeTableModule,
  StyleClassModule,
  TreeSelectModule,
  BreadcrumbModule,
  AvatarGroupModule,
  InputSwitchModule,
  ProgressSpinnerModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...primeNgModules

  ],
  exports: [
    ...primeNgModules
  ]
})
export class PrimeNgModule { }
