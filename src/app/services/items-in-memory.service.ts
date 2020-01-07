import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { items } from '../../../itemsDB';

@Injectable({
  providedIn: 'root'
})
export class ItemsInMemoryService implements InMemoryDbService {

  constructor() { }

  createDb() {
    return { items };
  }

  genId(items): number {
    return items.length > 0 ? items[items.length - 1].id + 1 : 1;
  }
}
