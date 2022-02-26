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
    form: FormGroup;
    
  utente: Utente={
    nome: "a",
    cognome: "b",
    email: "c",
  };

  posData: RespUtente = {
    nome: "a",
    cognome: "b",
    email: "c",
    id: 0
}
resultData: PostUtente = {
  nome: "a",
  cognome: "b",
  email: "c",
}


  constructor(private utenteService: UserService, public fb: FormBuilder){

    this.form = fb.group({
      'nome':[],
      'cognome':[],
      'email':[]
    });
  }

   ngOnInit(){
   
    this.getUtenteComponent();
  }


  send(): void{
    this.utente.nome = this.form.controls['nome'].value;
    this.utente.cognome = this.form.controls['cognome'].value;
    this.utente.email = this.form.controls['email'].value;
    this.utenteService.postUtente(this.resultData).subscribe((RespUtente)=>{
    
      this.utente =this.resultData;
      });
    }

  


  public getUtenteComponent(): void {
    
    this.utenteService.getUtente().subscribe(
    (response: Utente) => {
        this.utente.nome = response.nome;
        this.utente.cognome = response.cognome;
        this.utente.email = response.email;

      }
    );
  }
}




