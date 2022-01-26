import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(public auth: AngularFireAuth,private fb: FormBuilder, private router:Router) { }
  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  signUpUser(){
    const {email,password} = this.signUpForm.value;
    this.auth.createUserWithEmailAndPassword(email,password).then(user=>{
      this.router.navigate(['home']);
    });

  }
}
