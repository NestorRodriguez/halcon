import { Injectable } from '@angular/core';
import {AngularFireAuth  } from '@angular/fire/auth';
import { promise } from 'protractor';
import { resolve } from 'url';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
// tslint:disable-next-line: import-spacing
import {Observable}  from  'rxjs';
import { TaskI } from '../models/task.interface';
import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private todosCollection: AngularFirestoreCollection<TaskI>;
  private todos: Observable<TaskI[]>;

  constructor(private AFauth: AngularFireAuth,  db: AngularFirestore ) {
    this.todosCollection = db.collection<TaskI>('todos');
    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }));
    }

  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todosCollection.doc<TaskI>(id).valueChanges();
  }

  updateTodo(todo: TaskI, id: string){
    return this.todosCollection.doc(id).update(todo);
  }

  addTodo(todo: TaskI) {
    return this.todosCollection.add(todo);
  }

  removeTodo(id: string) {
    return this.todosCollection.doc(id).delete();
  }

  tab1(USER: string, PASSWORD: string) {
    // tslint:disable-next-line: no-shadowed-variable
    return new Promise((resolve, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(USER, PASSWORD).then(user => {
       resolve(user);
      }).catch(err => rejected(err));
    });
  }

  register(USER: string, PASSWORD: string) {
     // tslint:disable-next-line: no-shadowed-variable
    return new Promise ((resolve, reject) => {
      this.AFauth.auth.createUserWithEmailAndPassword(USER, PASSWORD).then(res => {
               resolve(res);
      }).catch(err => reject(err));
    });

  }

}
