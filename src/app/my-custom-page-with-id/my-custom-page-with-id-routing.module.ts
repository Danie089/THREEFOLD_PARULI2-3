import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyCustomPageWithIdPage } from './my-custom-page-with-id.page';

const routes: Routes = [
  {
    path: '',
    component: MyCustomPageWithIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyCustomPageWithIdPageRoutingModule {}
