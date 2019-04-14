import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MissionVisionHistoryPage } from './mission-vision-history.page';

const routes: Routes = [
  {
    path: '',
    component: MissionVisionHistoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MissionVisionHistoryPage]
})
export class MissionVisionHistoryPageModule {}
