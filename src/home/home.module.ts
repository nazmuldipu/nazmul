import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './containers/index/index.component';
import { HomeComponent } from './home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { IntroComponent } from './components/intro/intro.component';
import { BaseInfoComponent } from './components/base-info/base-info.component';
import { FeaturesComponent } from './components/features/features.component';
import { RecentsComponent } from './components/recents/recents.component';
import { StartupsComponent } from './components/startups/startups.component';
import { FooterComponent } from './components/footer/footer.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

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
  imports: [CommonModule, InfiniteScrollModule, RouterModule.forChild(ROUTES)],
  declarations: [
    HomeComponent,
    IndexComponent,
    SideNavComponent,
    NavBarComponent,
    IntroComponent,
    BaseInfoComponent,
    FeaturesComponent,
    RecentsComponent,
    StartupsComponent,
    FooterComponent
  ]
})
export class HomeModule {}
