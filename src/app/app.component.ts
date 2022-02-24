import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Utente } from './user';
import { UserService} from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  
  constructor(private utenteService: UserService){}
 
   utente: Utente={
     nome: "a",
     cognome: "b",
     email: "c",
   };

   ngOnInit(){
    this.getUtenteComponent();
  }

  getForm(loginForm:any){
    this.utente.nome = loginForm.nome;
    this.utente.cognome = loginForm.cognome;
    this.utente.email = loginForm.email;
   }

  public getUtenteComponent(): void {
    this.utenteService.getUtente().subscribe(
    (response: Utente) => {
        this.utente = response;
      }
    );
  }


  /* public onAddEmloyee(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.userService.postUser(addForm.value).subscribe(
      (response: User) => {
        console.log(response);
        this.getUserComponent();
        addForm.reset();
      },
    );
  }
*/


}


