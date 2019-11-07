import { Injectable } from '@angular/core';
import {AngularFireAuth  } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth ) { }
  tab1(USER:string, PASSWORD:string){
    this.AFauth.auth.signInWithEmailAndPassword(USER,PASSWORD).then(res =>{ 
      console.log('Estas logueado:'+res)
    }).catch(err => console.log('error : ' +err))
   }
  
}
