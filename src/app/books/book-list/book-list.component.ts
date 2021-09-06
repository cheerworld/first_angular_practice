import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  @Input() recipe: string = '';
  ingredients: string[] = ['lemon', 'water', 'sugar'];

  constructor() {}

  ngOnInit(): void {}
}
