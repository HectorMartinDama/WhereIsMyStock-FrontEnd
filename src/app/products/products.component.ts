import { Component, OnInit } from '@angular/core';
// importaciones para peticiones http
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpClient) { }


  // obtiene todos los productos que guarda el usuario.
  getAllProducts(tokenUser: string){
    return this.http.get('http://localhost:3000/api/products')
  }

  ngOnInit(): void {
  }

}
