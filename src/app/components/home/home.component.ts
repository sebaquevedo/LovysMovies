import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()
  constructor(public auth:AngularFireAuth, private router: Router) { }
  ngOnInit(): void {
  }
  logout(){
    this.auth.signOut().then(()=> this.router.navigate(['sign-in']))
  }

   handleLogout($event){
    this.logout();
   }

}
