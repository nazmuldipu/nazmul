import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
