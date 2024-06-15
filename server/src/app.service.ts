import { Injectable } from '@nestjs/common';

interface Todo {
  id: string;
  name: string;
  complete: boolean;
}

export interface Db {
  todos: Todo[];
}

const db: Db = {
  todos: [
    { id: '1', name: 'Buy milk', complete: false },
    { id: '2', name: 'Buy 2milk', complete: false },
    { id: '3', name: 'Buy 2milk', complete: false },
    { id: '4', name: 'Buy 2milk', complete: false },
  ],
};

@Injectable()
export class AppService {
  getTodos(): Db {
    return db;
  }
}
