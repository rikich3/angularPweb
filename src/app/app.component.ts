import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DataService } from './Services/data.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HelloWorldComponent, UserComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = ['Ryan', 'Joe', 'Cam', 'John'];
  activated = false;
  title = 'my-dream-app';
  name: string;
  webpage: string;
  hobbies: string[];
  showHobbies: boolean;
  dataService: DataService = inject(DataService);

  constructor(){
    console.log('Contructor woekiing...');
    this.name = "Rikich";
    this.webpage = "frennow.com";
    this.hobbies = ['Videogames', 'Read', 'code'];
    this.showHobbies = false;
    this.dataService.getData().subscribe(data => {
      console.log(data);
    });
  }

  toggleHobbies(){
    this.showHobbies = !this.showHobbies;
  }
  newHobby(hobby: { value: string; }){
    this.hobbies.push(hobby.value);
    hobby.value = '';
    return false;
  }
  deleteUser(user: string){
    for(let i = 0; i < this.users.length; i++){
      if(user == this.users[i]){
        this.users.splice(i, 1);
      }
    }
  }
  addUser(newUser: { value: string; focus: () => void; }){
    this.users.push(newUser.value);
    newUser.value = '';
    newUser.focus();
    return false;
  }
  sayHello(){
    alert('Hello ' + this.name);
  }

}

