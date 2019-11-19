import { Component, OnInit } from '@angular/core';
import {AuthService  } from '../servicios/auth.service'; // revisar esta linea
import {Router} from '@angular/router';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  USER: string;
  PASSWORD: string;
  usuario = {
    user: 'Fredy Halcon',
    password: 'Cuidamos'
  };

  constructor(private authService: AuthService, public router: Router,
              // tslint:disable-next-line: no-shadowed-variable
              private Storage: Storage
    ) {

  }
      //  setTheValue() {
      //    this.storage.set('login', 'PASSWORD');
      //  }
      //  getTheValue() {

      //  }
    ngOnInit() {
      this.Storage.get('User').then((val: string) => {
         console.log('value is' + val);
         if (val != null) {
           this.router.navigate(['/tabs/tab2']);
         }
        });
      this.Storage.get('USER').then((val: string) => {
          console.log('value is' + val);
          if (val != null) {
            this.router.navigate(['/tabs/tab2']);
          }
         });
      this.Storage.get('PASSWORD').then((val: string) => {
          console.log('value is' + val);
          if (val != null) {
            this.router.navigate(['/tabs/tab2']);
          }
         });

    }


    OnSubmittab1() {
    console.log('Valor usuario');
    console.log(this.usuario);
    this.Storage.set('User', this.usuario);
    this.authService.tab1(this.USER, this.PASSWORD).then(res => {
        this.router.navigate(['/home']);
     }).catch(err => alert('los datos son incorrectos O Usuario no existe'));
  }

}
