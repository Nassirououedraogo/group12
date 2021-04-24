import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepagePage } from './homepage.page';

const routes: Routes = [
  {
    path:'homepage',
    component:HomepagePage,
    children:[
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
      },
      {
        path: 'notes',
        loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
      },
      {
        path: 'stats',
        loadChildren: () => import('./stats/stats.module').then( m => m.StatsPageModule)
      },
      {
        path:'',
        redirectTo:'/homepage/homepage/category',
        pathMatch:'full'
      }
    ]
  },
  {
    path:'',
    redirectTo:'/homepage/homepage/category',
    pathMatch:'full'
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepagePageRoutingModule {}
