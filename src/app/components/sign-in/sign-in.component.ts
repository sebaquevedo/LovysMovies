import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  constructor(public authService: AuthService,public router: Router) {
 if(authService.isSignedIn){
       router.navigate(['/home']);
    }
}
  ngOnInit(): void {

  }
  onSignIn(email:string, password:string){
    this.authService.onSignIn(email,password)
  }
}
