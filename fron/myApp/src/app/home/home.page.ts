import { Component, OnInit } from '@angular/core';
import {AuthService  } from '../servicios/auth.service'; // revisar esta linea
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  IMEI: string;
  CIUDAD: string;
 
  IMEI1 = {
    IMEI: 'IMEI'
  };

  CIUDAD1 = {
    CIUDAD: 'CIUDAD'
  };
  usuario = {
    IMEI: 'IMEI',
    CIUDAD: 'CIUDAD'
  };

  constructor(private authService: AuthService, public router: Router,
              // tslint:disable-next-line: no-shadowed-variable
              private Storage: Storage
    ) {

  }

    ngOnInit() {
      this.Storage.get('Imei').then((val: string) => {
         console.log('value is' + val);
         if (val != null) {
           this.router.navigate(['/home2']);
         }
        });
      this.Storage.get('IMEI').then((val: string) => {
          console.log('value is' + val);
          if (val != null) {
            this.router.navigate(['/home2']);
          }
         });
      this.Storage.get('CIUDAD').then((val: string) => {
          console.log('value is' + val);
          if (val != null) {
            this.router.navigate(['/home2']);
          }
         });

    }


    OnSubmittab1() {
    console.log('Valor usuario');
    console.log(this.usuario);
    this.Storage.set('Imei', this.usuario);
    this.authService.tab1(this.IMEI, this.CIUDAD).then(res => {
        this.router.navigate(['/mapa']);
     }).catch(err => alert('los datos son incorrectos O Usuario no existe'));

    console.log('Valor IMEI1');
    console.log(this.IMEI1);
    this.Storage.set('IMEI', this.IMEI1);
    this.authService.tab1(this.IMEI, this.CIUDAD).then(res => {
        this.router.navigate(['/mapa']);
     }).catch(err => alert('los datos son incorrectos O Usuario no existe'));

    console.log('Valor CIUDAD1');
    console.log(this.CIUDAD1);
    this.Storage.set('CIUDAD', this.CIUDAD);
    this.authService.tab1(this.IMEI, this.CIUDAD).then(res => {
        this.router.navigate(['/mapa']);
     }).catch(err => alert('los datos son incorrectos O Usuario no existe'));


  }

}

