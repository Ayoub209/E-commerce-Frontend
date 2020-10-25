import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthentificationService,private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(value){
    this.auth.Login(value.username,value.password);
    if(this.auth.isAuthenticated){
        this.router.navigateByUrl('');
    }
  }
}


