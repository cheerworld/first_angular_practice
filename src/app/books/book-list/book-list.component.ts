import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  recipe: string = 'lemonade';
  ingredients: string[] = ['lemon', 'water', 'sugar'];

  constructor() {}

  ngOnInit(): void {}
}
