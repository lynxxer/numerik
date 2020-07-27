import { Component, Input, OnInit } from '@angular/core';

import {ApiService} from '../services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Kerko Banesen';
  users;
  searchText;
  filteredUsers;
  constructor(private apiService: ApiService) {}
  ngOnInit() {

      this.apiService.getData().subscribe((data: any[]) => {
        console.log(data);
        this.users = data;
        this.filteredUsers = this.users;

      })
    }
  handleChange(value: string) {
      this.filteredUsers = this.users.filter(x => {
        const idMatch = x.id.toString().includes(value);
        const nameMatch = x.name.toLowerCase().includes(value.toLowerCase());
        const usernameMatch = x.username.toLowerCase().includes(value.toLowerCase());
        return idMatch || nameMatch || usernameMatch || (value === '');
      });
  }
}
