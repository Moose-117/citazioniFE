import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = `http://localhost:8080`;

  constructor(private http: HttpClient ) { }


  public getUser(): Observable<User> {

    return this.http.get<User>(`${this.apiServerUrl}/users/getUserById/-939584518`)

  } 

  public postUser(user: User): Observable<User> {

    return this.http.post<User>(`${this.apiServerUrl}/users/postUtente`, user)

  } 

}