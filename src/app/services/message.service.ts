import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  private messages: string[] = [];

  constructor() { }

  add(message: string) {
    console.log(message);
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
