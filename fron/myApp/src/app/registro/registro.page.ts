import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public USER: string;
  public PASSWORD: string;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
  OnSubmitRegister() {
   this.auth.register(this.USER, this.PASSWORD).then( auth => {
     console.log(auth);
   }).catch(err => console.log(err));
  }

}
