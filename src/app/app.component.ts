import { Component, OnInit } from '@angular/core';
import { Person } from './shared/person.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchString='';
  title = 'lab13';
  persons: Person[] = [];
  ngOnInit() {
    this.persons.push(new Person(1, 'Иван', 'Иванов'));
    this.persons.push(new Person(2, 'Андрей', 'Андреев'));
    this.persons.push(new Person(3, 'Александр', 'Александров'));
    this.persons.push(new Person(4, 'Николай', 'Николаев'));
    this.persons.push(new Person(5, 'Роман', 'Романов'));
    
  }
  changePersons(person){
    this.searchString='';
    this.persons.splice(this.persons.findIndex(human => human.id == person.id), 1, person);
  }
  deletePersons(id){
    this.searchString='';
    this.persons.splice(this.persons.findIndex(human => human.id == id), 1);
  }
  addPersons(obj){
    let id = +this.persons[this.persons.length-1].id +1;
    this.searchString='';
    this.persons.push(new Person(id, obj.name_man, obj.surname_man));
  }
    }

