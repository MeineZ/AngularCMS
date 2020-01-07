import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/models/item';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() editMode: boolean = false;
  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

}
