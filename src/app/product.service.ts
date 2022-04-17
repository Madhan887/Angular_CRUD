import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductInterface } from './product-interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  backendurl="http://localhost:3000/product"

  getalldata():Observable<ProductInterface[]>
  {
    return this.http.get<ProductInterface[]>(this.backendurl)
  }

  createdata(product:ProductInterface):Observable<ProductInterface[]>
  {
    return this.http.post<ProductInterface[]>(this.backendurl,product)
  }

  deletedata(id:number):Observable<ProductInterface[]>
  {
    let url="http://localhost:3000/product/"+id+"/"
    return this.http.delete<ProductInterface[]>(url)
  }

  getdatabyname(id:number):Observable<ProductInterface>
  {
    let url=this.backendurl+"/"+id
    return this.http.get<ProductInterface>(url)
  }

  updatedata(id:number,product:ProductInterface)
  {
    let u=this.backendurl+"/"+id
    return this.http.put<ProductInterface[]>(u,product)
  }
}
