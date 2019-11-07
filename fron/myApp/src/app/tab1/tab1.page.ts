import { Component } from '@angular/core';
import {AuthService  } from "../servicios/auth.service"; //revisar esta linea 

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  USER: string;
  PASSWORD: string;

  constructor(private authService: AuthService) {}
  ngOnInit(){

  }
  OnSubmittab1() 
  {
     this.authService.tab1(this.USER, this.PASSWORD);
  }

}
