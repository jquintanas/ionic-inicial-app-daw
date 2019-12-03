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
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./app-camera/camara.module').then(m => m.CamaraModule)
  },
  {
    path: 'apiGet',
    loadChildren: () => import('./get-api/get-api.module').then(m => m.GetApiModule)
  },
  {
    path: 'apiPost',
    loadChildren: () => import('./post-data/post-data.module').then(m => m.PostDataModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
