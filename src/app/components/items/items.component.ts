import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/models/item';

@Component({
  selector: 'items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  public items: Item[];

  constructor(
    private itemService: ItemService
  ) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
    });
  }

  onDelete(item: Item) {
    this.itemService.deleteItem(item).subscribe(_ => {
      this.items = this.items.filter(i => i !== item);
    });
  }
}
