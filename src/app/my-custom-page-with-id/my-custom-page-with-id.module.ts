import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyCustomPageWithIdPageRoutingModule } from './my-custom-page-with-id-routing.module';

import { MyCustomPageWithIdPage } from './my-custom-page-with-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyCustomPageWithIdPageRoutingModule
  ],
  declarations: [MyCustomPageWithIdPage]
})
export class MyCustomPageWithIdPageModule {}
