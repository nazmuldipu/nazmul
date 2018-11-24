import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './containers/index/index.component';
import { HomeComponent } from './home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IntoComponent } from './components/into/into.component';
import { IntroComponent } from './components/intro/intro.component';
import { BaseInfoComponent } from './components/base-info/base-info.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      }
    ]
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  declarations: [HomeComponent, IndexComponent, SideNavComponent, NavBarComponent, IntoComponent, IntroComponent, BaseInfoComponent]
})
export class HomeModule {}
