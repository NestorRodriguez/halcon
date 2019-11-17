import { Injectable } from '@angular/core';
import {AngularFireAuth  } from '@angular/fire/auth';
import { promise } from 'protractor';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth ) { }
  tab1(USER: string, PASSWORD: string) {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(USER, PASSWORD).then(user => {
       resolve(user);
      }).catch(err => rejected(err));
    });

   }
   register(USER: string, PASSWORD: string) {
     // tslint:disable-next-line: no-shadowed-variable
     return new Promise ((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(USER, PASSWORD).then(res => {
               resolve(res);
      }).catch(err => reject(err));
     });

   }

}
