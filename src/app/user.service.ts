import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Utente } from './user';
import { PostUtente} from './postUserObj';
import { userInfo } from 'os';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = `https://morning-meadow-02168.herokuapp.com`;
  postUrl: string = "/users/postUtente";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };


// ######## GET USER ############## //
  constructor(private http: HttpClient ) { }

  public getUtente(): Observable<Utente> {
    return this.http.get<Utente>(`${this.apiServerUrl}/users/getUserById/708416356`);
  }



  public getAllUtente(): Observable<Utente[]> {
    
    return this.http.get<Utente[]>(`${this.apiServerUrl}/users/getAllUsers`);
   
  }


// ######## POST USER ############## //

public postUtente (utente:PostUtente) {
  
    return this.http.post(this.apiServerUrl + this.postUrl, utente, this.httpOptions);
    const logUtente = JSON.stringify(utente);
    console.log("utente inserito = " + logUtente);
  }
}