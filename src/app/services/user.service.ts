import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/7e3e33ce-6bed-4154-8d9f-1932f2b607c5';
  httpOptions = {
    Headers: new HttpHeaders({
      'content-type': 'application/json',
    })
  }
  constructor(private  httpClient: HttpClient) { }

  // C.R.U.D - CREATE, READ, UPDATE, DELETE

  //Retorna a lista de usuário READ
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  //Salva usuario no banco CREATE
  postUser(user: User):Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user)
  }
}
