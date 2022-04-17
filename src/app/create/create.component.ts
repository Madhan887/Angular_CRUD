import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../product-interface';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private productservice:ProductService,private router:Router) { }
  public product:ProductInterface={"id":0,"name":"sharp","price":0,"quantity":0,"description":"good"}
  ngOnInit(): void {
  }
  add()
  {
     this.productservice.createdata(this.product).subscribe((i) =>{
        this.router.navigate(["home/"])
    }) 
  }
}
