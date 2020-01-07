import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Item } from 'src/models/item';

@Injectable()
export class ItemService {
  private apiUrl: string = 'api/items';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  log(message: string) {
    this.messageService.add(message);
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl).pipe(
      tap(_ => { this.log("Fetched all items"); }),
      catchError(this.handleError<Item[]>('getItems', []))
    );
  }

  deleteItem(item: Item | number): Observable<Item> {
    const id = typeof item === 'number' ? item : item.id;

    return this.http.delete<Item>(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
      tap(_ => this.log(`Delete item with id: ${id}`)),
      catchError(this.handleError<Item>('deleteItem'))
    );
  }

  updateItem(item: Item): Observable<any> {
    const id = item.id;

    return this.http.put(`${this.apiUrl}/${id}`, item, this.httpOptions).pipe(
      tap(_ => this.log(`Updated item with id: ${id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(`${this.apiUrl}`, item, this.httpOptions).pipe(
      tap(_ => this.log(`Added new item`)),
      catchError(this.handleError<Item>('addItem'))
    );
  }

  handleError<T>(operation: string = 'operation', result?: T)  {
    return (error: any) => {
      this.log(error);

      return of(result as T);
    };
  }
}
