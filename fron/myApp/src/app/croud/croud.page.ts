import { Component, OnInit } from '@angular/core';
import {TaskI}from '../models/task.interface';
import {AuthService} from '../servicios/auth.service/';

@Component({
  selector: 'app-croud',
  templateUrl: './croud.page.html',
  styleUrls: ['./croud.page.scss'],
})
export class CroudPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
