import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MapaPage } from './mapa.page';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';


// const routes: Routes = [
//   {
//     path: '',
//     component: MapaPage
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: MapaPage }]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB-WXfwBZru8I7Z5LqCCdigENxbBloMUZ4'
    })
  ],
  providers: [
    Geolocation
  ]
,
  declarations: [MapaPage]
})
export class MapaPageModule {}
