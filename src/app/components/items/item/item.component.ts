import { ItemService } from './../../../services/item.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/models/item';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() editMode: boolean = false;
  @Input() item: Item;

  @Output() onUpdate = new EventEmitter();
  @Output() onDelete = new EventEmitter();

  itemForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    seller: ['', [Validators.required, Validators.minLength(3)]]
  });

  constructor(
    private fb: FormBuilder,
    private itemService: ItemService) { }

  ngOnInit() {
    this.itemForm.patchValue(this.item);
  }

  onSubmit() {
    this.item = {
      ...this.item,
      ...this.itemForm.value
    };

    this.onUpdate.emit({item: this.item});
  }

  handleDelete() {
    this.onDelete.emit({item: this.item});
  }

}
