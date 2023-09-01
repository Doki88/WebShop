import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { connect } from 'rxjs';
import { Pagination } from './modules/pagination';
import { Product } from './modules/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'WebShop';
  products: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Pagination<Product[]>>(
        'https://localhost:5001/api/products?pageSize=50'
      )
      .subscribe({
        next: (response) => (this.products = response.data), //what to do next
        error: (error) => console.log(error), //what to do if there is an error
        complete: () => {
          console.log('request completed');
          console.log('extra statement');
        },
      });
  }
}