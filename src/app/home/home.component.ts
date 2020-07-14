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
  filteredHeroes;
  
  constructor() {}


  ngOnInit() {
      this.filteredHeroes = this.heroes;
    }
    
  handleChange(value: string) {
      this.filteredHeroes = this.heroes.filter(hero => {
        let idMatch = hero.id.toString().includes(value);
        let nameMatch = hero.name.toLowerCase().includes(value.toLowerCase());
        let countryMatch = hero.country.toLowerCase().includes(value.toLowerCase());
        return idMatch || nameMatch || countryMatch || (value == "");
      });
  }

}