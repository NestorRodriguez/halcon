import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)},
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule'},  { path: 'home2', loadChildren: './home2/home2.module#Home2PageModule' },
  { path: 'croud', loadChildren: './croud/croud.module#CroudPageModule' },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
