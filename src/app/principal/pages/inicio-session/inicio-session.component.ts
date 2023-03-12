import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-session',
  templateUrl: './inicio-session.component.html',
  styleUrls: ['./inicio-session.component.css']
})
export class InicioSessionComponent {

  constructor(private rout: Router){}

  login(){
    // ir ala bd

    this.rout.navigate(['./']);

  }
}
