import { Component, OnInit } from '@angular/core';
import { Utente } from '../user';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostUtente, RespUtente } from '../postUserObj';

@Component({
  selector: 'app-search-quote',
  templateUrl: './search-quote.component.html',
  styleUrls: ['./search-quote.component.css']
})
export class SearchQuoteComponent implements OnInit {
  form: FormGroup;
  utenti: Utente[] =[];
  headers = ["Nome", "Cognome", "Email"];
  utente: Utente={
    nome: "c",
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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  send(): void{
    this.utente.nome = this.form.controls['nome'].value;
    this.utente.cognome = this.form.controls['cognome'].value;
    this.utente.email = this.form.controls['email'].value;
    this.utenteService.postUtente(this.utente).subscribe((RespUtente)=>{
      if(this.utente)
        alert("utente inserito correttamente" + this.utente.nome + this.utente.cognome + this.utente.email);
      });
    }
}




