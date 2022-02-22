import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Utente } from './user';

@Injectable({
  providedIn: 'root'
})
export class UtenteService {
  private apiServerUrl = `https://morning-meadow-02168.herokuapp.com`;

  constructor(private http: HttpClient ) { }


  public getUtente(): Observable<Utente> {
    alert(this.http.get<Utente>(`${this.apiServerUrl}/users/getUserById/281983922`));
    return this.http.get<Utente>(`${this.apiServerUrl}/users/getUserById/281983922`);
  }
}