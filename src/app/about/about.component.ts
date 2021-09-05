import { Component, OnInit } from '@angular/core';
import { About } from '../models/about';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  animalList: About[] = [];

  constructor() {}

  ngOnInit(): void {
    this.animalList = [
      {
        id: 1,
        name: 'Panda',
        fed: true,
      },
      {
        id: 2,
        name: 'Elephant',
        fed: true,
      },
      {
        id: 3,
        name: 'Lion',
        fed: false,
      },
    ];
  }
}
