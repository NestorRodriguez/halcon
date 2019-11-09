import { Injectable } from '@angular/core';
import {AngularFireAuth  } from '@angular/fire/auth';
import { promise } from 'protractor';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth ) { }
  tab1(USER:string, PASSWORD:string){
    return new Promise((resolve, rejected) =>{
      this.AFauth.auth.signInWithEmailAndPassword(USER,PASSWORD).then(user =>{ 
       resolve(user);
      }).catch(err => rejected(err));
    });
    
   }
  
}
