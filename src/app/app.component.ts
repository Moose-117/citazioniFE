import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Utente } from './user';
import { UserService} from './user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PostUtente, RespUtente } from './postUserObj';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  // utenti: Utente[] =[];
    
  // utente: Utente={
  //   nome: "a",
  //   cognome: "b",
  //   email: "c",
  // };


  constructor(private utenteService: UserService, public fb: FormBuilder){
  }

  ngOnInit(){
   
    //this.getUtenteComponent();
    //this.getAllUtentiComponent();
  }



  // public getUtenteComponent(): void {
    
  //   this.utenteService.getUtente().subscribe(
  //   (response: Utente) => {
  //       this.utente.nome = response.nome;
  //       this.utente.cognome = response.cognome;
  //       this.utente.email = response.email;
  //     }
  //   );
  // }
  // public getAllUtentiComponent(): void {
    
  //   this.utenteService.getAllUtente().subscribe(
  //     (response: Utente[]) => {
  //       this.utenti = response;
  //     }
  //   )
  // }
}
