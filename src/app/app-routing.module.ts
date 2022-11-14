import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'event', loadChildren: './event/event.module#EventPageModule' },
  { path: 'indoor', loadChildren: './indoor/indoor.module#IndoorPageModule' },
  { path: 'outdoor', loadChildren: './outdoor/outdoor.module#OutdoorPageModule' },
  { path: 'competition', loadChildren: './competition/competition.module#CompetitionPageModule' },
  { path: 'view-sport-center', loadChildren: './view-sport-center/view-sport-center.module#ViewSportCenterPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
