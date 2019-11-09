import { Component, OnInit } from '@angular/core';
import {AuthService  } from "../servicios/auth.service"; //revisar esta linea 
import{Router} from "@angular/router";
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  USER: string;
  PASSWORD: string;

  constructor(private authService: AuthService, public router: Router ) {}
   
  ngOnInit(){

  }
  OnSubmittab1() 
  {
     this.authService.tab1(this.USER, this.PASSWORD).then(res=>{
        this.router.navigate(['/home']);
     }).catch(err => alert('los datos son incorrectos O Usuario no existe'))
  }

}
