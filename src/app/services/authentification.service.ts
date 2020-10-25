import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private users=[
    {username:'admin',password:'1234',roles:['ADMIN','USER']},
    {username:'user1',password:'12345',roles:['USER']},
    {username:'user2',password:'123456',roles:['USER']}
  ]
  public isAuthenticated:boolean;
  private userAuthenticated;

  constructor() { }

  public Login(username:string,password:string){
    let user;
    this.users.forEach(u=>{
      if(u.username==username && u.password==password){
        user=u;
      }
      
    });
    if (user) {
      this.isAuthenticated=true;
      this.userAuthenticated=user;
    }
    else { 
      this.isAuthenticated=false;
      this.userAuthenticated=undefined;
    }
  }

  public isAdmin(){
    if(this.isAuthenticated){
      if(this.userAuthenticated.roles.indexOf('ADMIN')>-1){
        return true;
      }
     
      }
      return false;
  }
}
