import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RespCitazione } from './citazione';
import { CitazioneCercata } from './CitazioneCercata';


@Injectable({
  providedIn: 'root'
})
export class CitazioneService {
  private apiServerUrl = `http://localhost:8080`;
  getUrl: string = "/users/searchCitazione";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };


// ######## GET CITAZIONE ############## //
  constructor(private http: HttpClient ) { }


  public getAllCitazioni(stringaCercata: string): Observable<CitazioneCercata[]> {
    
    //return this.http.get<CitazioneCercata[]>(`${this.apiServerUrl}/users/getCitazione/${stringaCercata}`);
    return this.http.get<CitazioneCercata[]>(`${this.apiServerUrl}/users/getAllCitazioni`);

  }
}