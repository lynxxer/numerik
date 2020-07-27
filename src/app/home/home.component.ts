import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'Kerko Banesen';
  searchText;
  heroes = [
    { id: 11, name: 'Mr. Nice', country: 'India' },
    { id: 12, name: 'Narco' , country: 'USA'},
    { id: 13, name: 'Bombasto' , country: 'UK'},
    { id: 14, name: 'Celeritas' , country: 'Canada' },
    { id: 15, name: 'Magneta' , country: 'Russia'},
    { id: 16, name: 'RubberMan' , country: 'China'},
    { id: 17, name: 'Dynama' , country: 'Germany'},
    { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
    { id: 19, name: 'Magma' , country: 'South Africa'},
    { id: 20, name: 'Tornado' , country: 'Sri Lanka'}
  ];
  public filteredHeroes;
  public data: any;
  public filteredData;
  

  constructor() {}


  ngOnInit() {
      this.filteredData = this.data;
      this.getData()
    }
    
  handleChange(value: string) {
      this.filteredData = this.data.filter(user => {
        let idMatch = user.id.toString().includes(value);
        let nameMatch = user.name.toLowerCase().includes(value.toLowerCase());
        let usernameMatch = user.username.toLowerCase().includes(value.toLowerCase());
        return idMatch || nameMatch || usernameMatch || (value == "");
      })
  }

  public getData() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.data = json)
  }

}