import { Injectable, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {
isSignedIn = false
constructor(public firebaseService: FirebaseService) { }
ngOnInit(): void {
  if(localStorage.getItem('user')!== null){
    this.isSignedIn = true
  }
  else{
    this.isSignedIn = false
  }
}
async onSignUp(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
async onSignIn(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
handleLogout(){
  this.isSignedIn = false;
}

}
