import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewSportCenterPage } from './view-sport-center.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSportCenterPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewSportCenterPage]
})
export class ViewSportCenterPageModule {}
