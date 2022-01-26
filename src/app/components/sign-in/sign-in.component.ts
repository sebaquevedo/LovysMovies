import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  constructor(public auth:AngularFireAuth ,public router: Router, public fb:FormBuilder) {
  }
 ngOnInit(): void {

 this.signInForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });


}

    signInUser(){
    const {email,password} = this.signInForm.value;
    this.auth.signInWithEmailAndPassword(email,password).then(user=>{
      this.router.navigate(['home']);
    });

  }
}
