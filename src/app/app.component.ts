import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  public user: User;

  constructor(private userService: UserService){}

  ngOnInit(){
    this.getUserComponent();
  }

  public getUserComponent(): void {
    this.userService.getUser().subscribe(
    (response: User) => {
        this.user = response;
      let str;
      str = JSON.stringify(response, null, 4);
      console.log(str);

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


