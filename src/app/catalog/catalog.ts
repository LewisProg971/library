import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  image: string;
  quantity: number;
  showDetails: boolean;
}

@Component({
  imports: [DecimalPipe, MatButtonModule, MatCardModule],
  selector: 'app-catalog',
  styleUrl: './catalog.css',
  templateUrl: './catalog.html',
})
export class Catalog {
  filterStock = 'all';

  readonly books: Book[] = [
    {
      id: 'LP-001',
      title: 'Le Petit Prince',
      author: 'Antoine de Saint-Exupéry',
      price: 9.9,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80',
      quantity: 3,
      showDetails: false,
    },
    {
      id: 'VM-002',
      title: 'Vingt mille lieues sous les mers',
      author: 'Jules Verne',
      price: 12.5,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80',
      quantity: 0,
      showDetails: false,
    },
    {
      id: 'ET-003',
      title: "L'Étranger",
      author: 'Albert Camus',
      price: 8.9,
      image: 'https://images.unsplash.com/photo-1511108690759-009cbe9c57a0?auto=format&fit=crop&w=500&q=80',
      quantity: 5,
      showDetails: false,
    },
    {
      id: 'OR-004',
      title: '1984',
      author: 'George Orwell',
      price: 11.2,
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=500&q=80',
      quantity: 0,
      showDetails: false,
    },
  ];

  getFilteredBooks(): Book[] {
    if (this.filterStock === 'inStock') {
      return this.books.filter((book) => book.quantity > 0);
    }

    if (this.filterStock === 'outOfStock') {
      return this.books.filter((book) => book.quantity === 0);
    }

    return this.books;
  }

  incrementStock(book: Book): void {
    book.quantity += 1;
  }

  decrementStock(book: Book): void {
    if (book.quantity > 0) {
      book.quantity -= 1;
    }
  }

  buyBook(book: Book): void {
    if (book.quantity === 0) {
      return;
    }

    this.decrementStock(book);
    window.alert(`Vous avez acheté : ${book.title}`);
  }
}
