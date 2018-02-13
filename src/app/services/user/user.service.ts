import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../../interfaces/user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  private _rootUrl: string = 'http://jsonplaceholder.typicode.com/users';
  private _rootPostsUrl: string = 'http://jsonplaceholder.typicode.com/posts';
  private _prop: string = 'foo';
  public propChanged: BehaviorSubject<string> = new BehaviorSubject<string>(this._prop);

  private _users: IUser[] = [
    { id: 1, name: 'John Doe', email: 'john@e.com' },
    { id: 2, name: 'Tom Doe', email: 'tom@e.com' },
    { id: 3, name: 'Sam Doe', email: 'sam@e.com' },
    { id: 4, name: 'Tim Doe', email: 'tim@e.com' },
    { id: 5, name: 'Jane Doe', email: 'jane@e.com' },
  ];

  constructor(private http: HttpClient) { }

  getProp(): string {
    return this._prop;
  }

  addUser(user: IUser) {
    this._users.push(user);
  }

  setProp(prop: string): void {
    this._prop = prop;
    this.propChanged.next(this._prop);
  }

  getUsers(): IUser[] {
    return this._users;
  }

  getUsersViaREST(): Observable<IUser[]> {
    let headers = new HttpHeaders().set('Authorization', 'Bearer your-access-token-here');
    return this.http.get<IUser[]>(this._rootUrl, { headers })
      .map(users => {
        return users.map(user => {
          return { 
            id: user.id,
            name: user.name,
            email: user.email
          }
        })
      });
  }

  getUserById(id: number): IUser {
    return this._users.filter(user => user.id === id)[0];
  }

  getUserByIdViaREST(id: number): Observable<IUser> | any {
    return this.http.get<IUser>(`${this._rootUrl}/${id}`)
    .retry(3)
    .catch(err => {
      console.log('Got an error as: ', err);
      return err;
    });
  }

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this._rootUrl, user);
  }

  updateUser(user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this._rootUrl}/${user.id}`, user);
  }

  deleteUser(id: number): Observable<IUser> {
    return this.http.delete<IUser>(`${this._rootUrl}/${id}`);
  }

  getUserPosts(id: number): Observable<any> {
    let params = new HttpParams().set('userId', id.toString());
    return this.http.get(this._rootPostsUrl, { params });
  }

}
