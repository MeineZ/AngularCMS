import { TestBed } from '@angular/core/testing';

import { ItemsInMemoryService } from './items-in-memory.service';

describe('ItemsInMemoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemsInMemoryService = TestBed.get(ItemsInMemoryService);
    expect(service).toBeTruthy();
  });
});
