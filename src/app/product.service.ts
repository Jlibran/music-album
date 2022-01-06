import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Album } from './album';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _albumUrl='../assets/album.json';
  private _productsUrl= '../assets/products.json'

  constructor(private _http: HttpClient) { }
  
  getAlbum(id:number):Observable<Album>{
  return this._http.get(this._albumUrl).pipe
  (map(response => (<Album>response)));
  }
  getProducts():Observable<Product[]>{
    return this._http.get(this._productsUrl).pipe
    (map(response => <Product[]>response));
    }
}
