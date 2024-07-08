import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  // @Input() nameUser: any,
  // ngOnInit() {},
})
export class UserComponent implements OnInit {
  @Input() nameUser: any;
  sayhello(nameUser: string){
    alert('Hello ' + nameUser);
  }

  ngOnInit(): void {
    // Add your initialization logic here
  }
}

