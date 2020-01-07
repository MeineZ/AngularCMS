import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Item } from 'src/models/item';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [
    AdminService
  ]
})
export class AdminComponent implements OnInit {
  public items: Item[] = [];

  constructor(
    public admin: AdminService,
    private router: Router,
    private itemService: ItemService) { }

  ngOnInit() {
    /*if(!this.admin.isLoggedIn()) {
      this.router.navigate(['']); // Navigate back to home if not logged in
    }*/
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  onAdd() {
    this.itemService.addItem(new Item()).subscribe(item => {
      this.items.push(item);
    });
  }

  handleUpdate(event: any) {
    this.itemService.updateItem(event.item).subscribe();
  }

  handleDelete(event: any) {
    this.itemService.deleteItem(event.item).subscribe(() => {
      console.log("hey!");
      this.items = this.items.filter(i => i !== event.item);
    });
  }

}
