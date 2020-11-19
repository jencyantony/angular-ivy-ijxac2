import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-retrieve',
  templateUrl: './retrieve.component.html',
  styleUrls: ['./retrieve.component.css']
})
export class RetrieveComponent implements OnInit {
  public users=[];
  constructor(private userService:UserService) { }
  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = Array.from(Object.keys(data), k => data[k]);
      console.log(this.users);
    })
  }

}