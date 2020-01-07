import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string = '';
  public password: string = '';
  public errorMsg: string = '';

  constructor(
    private admin: AdminService,
    private router: Router ) { }

  ngOnInit() {
    if(this.admin.isLoggedIn()) {
      this.router.navigate(['/admin']); // Navigate back to home if not logged in
    }
  }

  onSubmit(event) {
    event.preventDefault();

    this.admin.logIn(this.username, this.password).subscribe((e) => {
      setTimeout(() => console.log('login?', this.admin.isLoggedIn()));
      if(e) {
        this.router.navigate(['/admin']); // Navigate back to home if not logged in
      } else {
        this.errorMsg = "Invalid credentials";
      }
    });
  }

}
