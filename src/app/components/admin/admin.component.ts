import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [
    AdminService
  ]
})
export class AdminComponent implements OnInit {

  constructor(
    public admin: AdminService,
    private router: Router) { }

  ngOnInit() {
    if(!this.admin.isLoggedIn()) {
      this.router.navigate(['']); // Navigate back to home if not logged in
    }
  }

}
